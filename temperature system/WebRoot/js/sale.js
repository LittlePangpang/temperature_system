var condition = "";
function mainSearch(){
	condition = "";
	var customerName=$('#sel_cusName').val();
	if(customerName!=null && customerName!="undefined" && customerName!='' && customerName!='0'){
		condition=" and CUSTOMER_NAME ='"+customerName+"'";
	}
	$("#Screendiv").hide();
	if($("#pageSize").length>0){//不是第一次进入
		createZZC();
	}else{
		wait();
	}
	document.searchMainForm.action = '';
	var url = 'customer!init.action?condition='+condition;
	var params = $("#searchMainForm").serialize();
	$.ajax({
	     type: "POST",  
	     url: url, 
	     data: params,
	     dataType: "html",  
	     success: function(data) {
	     	$("#searchResult").html(data);
	     	$("#Screendiv").hide();
	      }
	    });
}
//翻页
function pageSearch(rowsum){
	if ($.trim(rowsum)=="" || $.trim(rowsum)=="0"){
		return;
	}
	document.searchMainForm.action = '';
	createZZC();
	var url = 'customer!changeSearch.action?rowsum='+rowsum+'&condition='+condition;
	var params = $("#searchMainForm").serialize();
	$.ajax({
	     type: "POST",  
	     url: url,	
	     data: params, 
	     dataType: "html", 
	     success: function(data) {
	     	$("#searchResult").html(data);	    
	     	$("#Screendiv").hide();
	      }
	    });
}
//遮罩层
function createZZC(){
	$("#Screendiv").css('width',$("#searchResultDiv").width());
	$("#Screendiv").css('height',$("#searchResultDiv").height());
	var lllpos=$("#searchResultDiv").position();
	$("#Screendiv").css('top',lllpos.top);
	$("#Screendiv").css('left',lllpos.left);
	$("#Screendiv").show();
}
function wait() {
    $("#searchResult").html("<br><img src='img/loading_data.gif' align='center'></img>");
}
//function findShortName(){
//	$.post("customerAjax!chShortNameList.action",findShortNameBack);
//}
//function findShortNameBack(data){
//	var shortName = $('#ShortName');
//	var dataObj=eval("("+data+")");
//	shortName.empty();
//	for(var i=0;i<dataObj.length;i++){   				  
//		var shortNameMsg = dataObj[i];
//		shortName.append("<option value='"+shortNameMsg.csrid+"'>"+shortNameMsg.csrname+ "</option>");
//	}
//}
//function findName(){
//	var shortName = $('#ShortName');
//	$.post("customerAjax!chNameList.action?companyCode="+shortName.val(),findNameBack);
//}
//function findNameBack(data){
//	var sales = $('#Sales');
//	var saleSupport = $('#saleSupport');
//	var controller = $('#controller');
//	var dataObj=eval("("+data+")");
//	sales.empty();
//	saleSupport.empty();
//	controller.empty();
//	for(var i=0;i<dataObj.length;i++){  
//		for(var j=0;j<dataObj[i].sales.length;j++){
//			sales.append("<option value='"+dataObj[i].sales[j]+"'>"+dataObj[i].sales[j]+ "</option>");
//		}
//		for(var j=0;j<dataObj[i].supports.length;j++){
//			saleSupport.append("<option value='"+dataObj[i].supports[j]+"'>"+dataObj[i].supports[j]+ "</option>");
//		}
//		for(var j=0;j<dataObj[i].controllers.length;j++){
//			controller.append("<option value='"+dataObj[i].controllers[j]+"'>"+dataObj[i].controllers[j]+ "</option>");
//		}
//	}
//}
//function findCountry(){
//	$.post("customerAjax!chCountryList.action",findCountryBack);
//}
//function findCountryBack(data){
//	var country = $('#country');
//	var dataObj=eval("("+data+")");
//	country.empty();
//   for(var i=0;i<dataObj.length;i++){   				  
//	   var countryMsg = dataObj[i];	
//	   country.append("<option value='"+countryMsg.csrid+"'>"+countryMsg.csrname+ "</option>");
//   }
//}
//function findProvince(){
//	var country = $('#country');
//	$.post("customerAjax!chProvinceList.action?countryCode="+country.val(),findProvinceBack);
//}
//function findProvinceBack(data){
//	var province = $('#province');
//	var dataObj=eval("("+data+")");
//	province.empty();
//	for(var i=0;i<dataObj.length;i++){  
//		var provinceMsg = dataObj[i];
//		province.append("<option value='"+provinceMsg.csrid+"'>"+provinceMsg.csrname+ "</option>");
//	}
//}
function quote(host,customerID,userid,timestamp,AccessType) {
	window.location.href = "http://"+host+"/cost/accessFromWeb.action?customerID="+customerID+"&userid="+userid+"&timestamp="+timestamp+"&funccode="+AccessType;	
}
function cancle1(customerCode){
	if(customerCode=='00000'){
		window.location.replace("saleSearch.jsp"); 
	}else{
		window.location.replace("customerSearch.jsp"); 
	}
}