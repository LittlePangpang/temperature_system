var condition = "";
function mainSearch(){
	condition = "";
	var customerName=$('#sel_cusName').val();
	var chineseName=encodeURI($('#sel_chiName').val());
	var shortName=$('#ShortName').val();
	var salesName=$('#Sales').val();
	var customerCode=$('#customerCode').val();
	if(customerName!=null && customerName!="undefined" && customerName!='' && customerName!='0'){
		condition=" and A.CUSTOMER_NAME ='"+customerName+"'";
	}
	if(chineseName!=null && chineseName!="undefined" && chineseName!='' && chineseName!='0'){
		condition+=" and A.ADDITIONAL_NAME ='"+chineseName+"'";
	}
	if(shortName != null && shortName!="undefined" && shortName!='' && shortName !='0'){
		condition+=" and A.COMPANY_CODE ='"+shortName+"'";
	}
	if(salesName != null && salesName!="undefined" && salesName!='' && salesName !='0' && salesName != 'Please Select'){
		condition+=" and A.SALES ='"+salesName+"'";
	}
	if(customerCode != null && customerCode!="undefined" && customerCode!='' && customerCode != '0'){
		condition+=" and A.CUSTOMER_CODE ='"+customerCode+"'";
	}
	condition = encodeURI(condition);
	$("#Screendiv").hide();
	if($("#pageSize").length>0){//不是第一次进入
		createZZC();
	}else{
		wait();
	}
	document.searchMainForm.action = '';
	var url = 'customer!init1.action?condition='+condition;
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
function findShortName(){
	$.post("customerAjax!chShortNameList.action",findShortNameBack);	
}
function findShortNameBack(data){
	var quotedOffice = $('#quotedOffice');
	var shortName = $('#ShortName');
	var dataObj=eval("("+data+")");
	shortName.empty();
	for(var i=0;i<dataObj.length;i++){   				  
		var shortNameMsg = dataObj[i];
		shortName.append("<option value='"+shortNameMsg.csrid+"'>"+shortNameMsg.csrname+ "</option>");
		quotedOffice.append("<option value='"+shortNameMsg.csrid+"'>"+shortNameMsg.csrname+ "</option>");
	}
}
function findCommodity(){	
	$.post("customerAjax!chCommodityList.action",findCommodityBack);
}
function findCommodityBack(data){	
	var commodity = $('#commodity');
	var dataObj=eval("("+data+")");
	commodity.empty();
	for(var i=0;i<dataObj.length;i++){  
		var commodityMsg = dataObj[i];
		commodity.append("<option value='"+commodityMsg.csrname+"'>"+commodityMsg.csrname+ "</option>");
	}
}

function findSalesName(){
	var quotedOffice = $('#quotedOffice');
	$.post("customerAjax!chSalesNameList.action?companyCode="+quotedOffice.val(),findSalesNameBack);
}
function findSalesNameBack(data){
	var quotedBy = $('#quotedBy');
//	var sales = $('#Sales');
	var dataObj=eval("("+data+")");
//	sales.empty();
	quotedBy.empty();
	for(var i=0;i<dataObj.length;i++){  
		var salesNameMsg = dataObj[i];
//		sales.append("<option value='"+salesNameMsg.csrname+"'>"+salesNameMsg.csrname+ "</option>");
		quotedBy.append("<option value='"+salesNameMsg.csrname+"'>"+salesNameMsg.csrname+ "</option>");
	}
}
function findName(){
	var shortName = $('#ShortName');
	$.post("customerAjax!chNameList.action?companyCode="+shortName.val(),findNameBack);
}
function findNameBack(data){
	var sales = $('#Sales');
	var saleSupport = $('#saleSupport');
	var controller = $('#controller');
	var dataObj=eval("("+data+")");
	sales.empty();
	saleSupport.empty();
	controller.empty();
	for(var i=0;i<dataObj.length;i++){  
		for(var j=0;j<dataObj[i].sales.length;j++){
			sales.append("<option value='"+dataObj[i].sales[j]+"'>"+dataObj[i].sales[j]+ "</option>");
		}
		for(var j=0;j<dataObj[i].supports.length;j++){
			saleSupport.append("<option value='"+dataObj[i].supports[j]+"'>"+dataObj[i].supports[j]+ "</option>");
		}
		for(var j=0;j<dataObj[i].controllers.length;j++){
			controller.append("<option value='"+dataObj[i].controllers[j]+"'>"+dataObj[i].controllers[j]+ "</option>");
		}
	}
}
//翻页
function pageSearch(rowsum){
	if ($.trim(rowsum)=="" || $.trim(rowsum)=="0"){
		return;
	}
	document.searchMainForm.action = '';
	createZZC();
	var url = 'customer!changeSearch1.action?rowsum='+rowsum+'&condition='+condition;
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
function findCountry(){
	$.post("customerAjax!chCountryList.action",findCountryBack);
}
function findCountryBack(data){
	var country = $('#country');
	var dataObj=eval("("+data+")");
	country.empty();
   for(var i=0;i<dataObj.length;i++){   				  
	   var countryMsg = dataObj[i];
	   country.append("<option value='"+countryMsg.csrid+"'>"+countryMsg.csrname+ "</option>");
   }
}
function findProvince(){
	var country = $('#country');
	$.post("customerAjax!chProvinceList.action?countryCode="+country.val(),findProvinceBack);
}
function findProvinceBack(data){
	var province = $('#province');
	var dataObj=eval("("+data+")");
	province.empty();
	for(var i=0;i<dataObj.length;i++){  
		var provinceMsg = dataObj[i];
		province.append("<option value='"+provinceMsg.csrid+"'>"+provinceMsg.csrname+ "</option>");
	}
}
function save(){
	if($.trim($("#name").val())=="" || $.trim($("#customerName").val())=="" ||  $.trim($("#commodity").val()=="Please Select")){
		alert("Short Name,Customer Name and Commodity,you must fill them");
		return;
	}
	var countryCode="";
	if($('#country').val() != '0'){
		countryCode=$('#country').val();
	}
	var provinceCode="";
	if($('#province').val() != '0'){
		provinceCode=$('#province').val();
	}
	var companyCode="";
	if($('#ShortName').val() !='0'){
		companyCode=$('#ShortName').val();
	}
	document.getElementById("form1").action='customer!saveCustomer.action?countryCode='+countryCode+'&provinceCode='+provinceCode+'&companyCode='+companyCode;
	document.getElementById("form1").submit();
}
function addContactFee(){
	var sTableSize = 0;
	while($("#contactFeeTr"+sTableSize).length > 0){
    	sTableSize = sTableSize + 1;
    } 	
	$("#contactFee tr:last").after("<tr id='contactFeeTr"+sTableSize+"'>"+	
			"<td><input class='form-control' id='name"+sTableSize+"' name='contactBeanList["+sTableSize+"].CONTACT_NAME' style='width:205px;height:30px;'></td>"+
			"<td><input class='form-control' id='role"+sTableSize+"' name='contactBeanList["+sTableSize+"].POSITION' style='width:205px;height:30px;'></td>"+
			"<td><input class='form-control' id='tel"+sTableSize+"' name='contactBeanList["+sTableSize+"].TELE' style='width:205px;height:30px;'></td>"+
			"<td><input class='form-control' id='phone"+sTableSize+"' name='contactBeanList["+sTableSize+"].MOBILE_PHONE' style='width:205px;height:30px;'></td>"+
			"<td><input class='form-control' id='email"+sTableSize+"' name='contactBeanList["+sTableSize+"].EMAIL' style='width:205px;height:30px;'></td>"+			
			"<td style='text-align:center;'>"+
			"<a href='javascript:void(0);' onclick=\"delContactFee('"+sTableSize+"')\"><span style='font-size:23px;color:black;'>-</span></a>"+
			"</td>"+
			"</tr>");
}
function addServiceFee(){
	var sTableSize = 0;
	while($("#serviceFeeTr"+sTableSize).length > 0){
    	sTableSize = sTableSize + 1;
    } 	
	$("#serviceFee tr:last").after("<tr id='serviceFeeTr"+sTableSize+"'>"+			
			"<td><select class='multiselect' multiple='multiple' id='bkCode"+sTableSize+"'></select><input id='a"+sTableSize+"' name='serviceBeanList["+sTableSize+"].OP_COMPANY_CODE' type = 'hidden' /></td>"+
			"<td><select class='multiselect' multiple='multiple' id='bkSales"+sTableSize+"'  ></select><input id='b"+sTableSize+"' type = 'hidden' name='serviceBeanList["+sTableSize+"].CLEARANCES'/></td>"+
			"<td><select id='opCode"+sTableSize+"' class='form-control' name='serviceBeanList["+sTableSize+"].COMPANY_CODE' id='opCode"+sTableSize+"' onchange='findAllThing("+sTableSize+")' style='width:120px;height:28px;'></select></td>"+
			//"<td><select class='multiselect' multiple='multiple' id='accounts"+sTableSize+"'></select><input id='c"+sTableSize+"' type = 'hidden' name='serviceBeanList["+sTableSize+"].ACCOUNTS'/></td>"+
			//"<td><select class='multiselect' multiple='multiple' id='bookings"+sTableSize+"'></select><input id='d"+sTableSize+"' type = 'hidden' name='serviceBeanList["+sTableSize+"].BOOKINGS'/></td>"+
			"<td><select class='multiselect' multiple='multiple' id='documentLine"+sTableSize+"'></select><input id='e"+sTableSize+"' type = 'hidden' name='serviceBeanList["+sTableSize+"].DOCUMENT_LINE'/></td>"+
			"<td><select class='multiselect' multiple='multiple' id='serviceMan"+sTableSize+"'></select><input id='f"+sTableSize+"' type = 'hidden' name='serviceBeanList["+sTableSize+"].SERVICE_MAN'/></td>"+
			"<td><select class='multiselect' multiple='multiple' id='documents"+sTableSize+"'></select><input id='g"+sTableSize+"' type = 'hidden' name='serviceBeanList["+sTableSize+"].DOCUMENTS'/></td>"+
			//"<td><select class='multiselect' multiple='multiple' id='schedules"+sTableSize+"'></select><input id='h"+sTableSize+"' type = 'hidden' name='serviceBeanList["+sTableSize+"].SCHEDULES'/></td>"+
			//"<td><select class='multiselect' multiple='multiple' id='fnPayee"+sTableSize+"'></select><input id='i"+sTableSize+"' type = 'hidden' name='serviceBeanList["+sTableSize+"].FN_PAYEE'/></td>"+
			//"<td><select class='multiselect' multiple='multiple' id='fnpayer"+sTableSize+"'></select><input id='j"+sTableSize+"' type = 'hidden' name='serviceBeanList["+sTableSize+"].FN_PAYER'/></td>"+					
			"<td style='text-align:center;'>"+
			"<a href='javascript:void(0);' onclick=\"delServiceFee('"+sTableSize+"')\"><span style='font-size:23px;color:black;'>-</span></a>"+
			"</td>"+
			"</tr>");
	findOPCode();
	$('#bkSales'+sTableSize).multiselect({buttonWidth: '140px',includeSelectAllOption: true,vPrefStr :'[',vSuffStr :']',vSeparatorStr:'',onChange: function(element, checked) {	 
    	saleList = this.options.buttonTitle(this.getSelected(), this.$select);    
    	document.getElementById("b"+sTableSize).value = saleList;
     }});
//	$('#accounts'+sTableSize).multiselect({buttonWidth: '120px',includeSelectAllOption: true,vPrefStr :'[',vSuffStr :']',vSeparatorStr:'',onChange: function(element, checked) {	 
//    	accountList = this.options.buttonTitle(this.getSelected(), this.$select);    
//    	document.getElementById("c"+sTableSize).value = accountList;
//     }});
//	$('#bookings'+sTableSize).multiselect({buttonWidth: '120px',includeSelectAllOption: true,vPrefStr :'[',vSuffStr :']',vSeparatorStr:'',onChange: function(element, checked) {	 
//    	bookList = this.options.buttonTitle(this.getSelected(), this.$select);    
//    	document.getElementById("d"+sTableSize).value = bookList;
//     }});
	$('#documentLine'+sTableSize).multiselect({buttonWidth: '140px',includeSelectAllOption: true,vPrefStr :'[',vSuffStr :']',vSeparatorStr:'',onChange: function(element, checked) {	 
    	lineList = this.options.buttonTitle(this.getSelected(), this.$select);    
    	document.getElementById("e"+sTableSize).value = lineList;
     }});
	$('#serviceMan'+sTableSize).multiselect({buttonWidth: '140px',includeSelectAllOption: true,vPrefStr :'[',vSuffStr :']',vSeparatorStr:'',onChange: function(element, checked) {	 
    	serviceList = this.options.buttonTitle(this.getSelected(), this.$select);    
    	document.getElementById("f"+sTableSize).value = serviceList;
     }});
	$('#documents'+sTableSize).multiselect({buttonWidth: '140px',includeSelectAllOption: true,vPrefStr :'[',vSuffStr :']',vSeparatorStr:'',onChange: function(element, checked) {	 
    	documentList = this.options.buttonTitle(this.getSelected(), this.$select);    
    	document.getElementById("g"+sTableSize).value = documentList;
     }});
//	$('#schedules'+sTableSize).multiselect({buttonWidth: '120px',includeSelectAllOption: true,vPrefStr :'[',vSuffStr :']',vSeparatorStr:'',onChange: function(element, checked) {	 
//    	scheduleList = this.options.buttonTitle(this.getSelected(), this.$select);    
//    	document.getElementById("h"+sTableSize).value = scheduleList;
//     }});
//	$('#fnPayee'+sTableSize).multiselect({buttonWidth: '120px',includeSelectAllOption: true,vPrefStr :'[',vSuffStr :']',vSeparatorStr:'',onChange: function(element, checked) {	 
//    	payeeList = this.options.buttonTitle(this.getSelected(), this.$select);    
//    	document.getElementById("i"+sTableSize).value = payeeList;
//     }});
//	$('#fnpayer'+sTableSize).multiselect({buttonWidth: '120px',includeSelectAllOption: true,vPrefStr :'[',vSuffStr :']',vSeparatorStr:'',onChange: function(element, checked) {	 
//    	payerList = this.options.buttonTitle(this.getSelected(), this.$select);    
//    	document.getElementById("j"+sTableSize).value = payerList;
//     }});
}
function delContactFee(li){
	$("#contactFeeTr"+li).remove();
}
function delServiceFee(li){
	$("#serviceFeeTr"+li).remove();
}
function findOPCode(){
	var data = $('#json').val();
	var sTableSize = $("#serviceFee").find("tr").length;
	sTableSize = sTableSize - 2;
	var bkCode = $('#bkCode'+sTableSize);
	var opCode = $('#opCode'+sTableSize);
	var dataObj=eval("("+data+")");
	opCode.empty();
	bkCode.empty();
	opCode.append("<option value=''>Please Select</option>");
	for(var i=0;i<dataObj.length;i++){ 
		opCode.append("<option value='"+dataObj[i].value+"'>"+dataObj[i].value+ "</option>");		
	}
	$('#bkCode'+sTableSize).multiselect({
		buttonWidth: '140px',
		includeSelectAllOption: true,
		vSeparatorStr :'',
	    onChange: function(element, checked) {	 
	    	$('#b'+sTableSize).val("");
	    	codeList = this.options.buttonTitle(this.getSelected(), this.$select);
	    	findClearances(sTableSize,codeList);
	    	document.getElementById("a"+sTableSize).value = codeList;
	     }
	});
}

function findClearances(sTableSize,codeList){
	$.post("customerAjax!chClearances.action?codeList="+codeList,
		function(data){
			var dataObj=eval(data);
			$('#bkSales'+sTableSize).multiselect('dataprovider', dataObj);
		}
	);
}

function findAllThing(sTableSize){
	var json2 = $('#json2').val();
	dataObj=eval(json2);
	$('#bkCode'+sTableSize).multiselect('dataprovider', dataObj);
	var opCode = $('#opCode'+sTableSize).val();
	$.post("customerAjax!chAllThing.action?opCode="+opCode,
		function(data){
			var dataObj=eval("("+data+")");
//			$('#accounts'+sTableSize).multiselect('dataprovider', dataObj.Coordinate);
//			$('#bookings'+sTableSize).multiselect('dataprovider', dataObj.LINE_DEPT);			
			$('#documentLine'+sTableSize).multiselect('dataprovider', dataObj.DOC_INPUT);			
			$('#serviceMan'+sTableSize).multiselect('dataprovider', dataObj.CUSTOMER_SERVICE);			
			$('#documents'+sTableSize).multiselect('dataprovider', dataObj.DOC_CUT);			
//			$('#schedules'+sTableSize).multiselect('dataprovider', dataObj.OPERATION_DEPT);			
//			$('#fnPayee'+sTableSize).multiselect('dataprovider', dataObj.PAYEE);			
//			$('#fnpayer'+sTableSize).multiselect('dataprovider', dataObj.PAYER);
		}
	);
//	$('#c'+sTableSize).val("");
//	$('#d'+sTableSize).val("");
	$('#e'+sTableSize).val("");
	$('#f'+sTableSize).val("");
	$('#g'+sTableSize).val("");
//	$('#h'+sTableSize).val("");
//	$('#i'+sTableSize).val("");
//	$('#j'+sTableSize).val("");
}

function update(){
	var sel_cusid = $('#CUSTOMER_ID').val();
	if($.trim($("#name").val())=="" || $.trim($("#customerName").val())=="" || $.trim($("#commodity").val())=="Please Select"){
		alert("Short Name,Customer Name and Commodity,you must fill them");
		return;
	}
	var countryCode="";
	if($('#country').val() != 'Please Select'){
		countryCode=$('#country').val();
	}
	var provinceCode="";
	if($('#province').val() != 'Please Select'){
		provinceCode=$('#province').val();
	}
	var companyCode="";
	if($('#ShortName').val() !='Please Select'){
		companyCode=$('#ShortName').val();
	}
	var url = 'customer!updateCustomer.action?countryCode='+countryCode+'&provinceCode='+provinceCode+'&companyCode='+companyCode+'&sel_cusid='+sel_cusid;  
	var params = $("#viewForm").serialize();
	$.ajax({
	     type: "POST",  
	     url: url,
	     data: params,  
	     dataType: "html",  
	     success: function(data) {
	    	 var showDiv = document.getElementById("showDiv");
	         showDiv.style.display = "block";
	    	 location.reload();
	      }
	    });		
}
function quote(host,customerID,userid,timestamp,AccessType) {	
	window.location.href = "http://"+host+"/cost/accessFromWeb.action?customerID="+customerID+"&userid="+userid+"&timestamp="+timestamp+"&funccode="+AccessType;			
}
function cancle(customerCode){
	if(customerCode=='00000'){
		window.location.replace("saleSearch.jsp"); 
	}else{
		window.location.replace("customerSearch.jsp"); 
	}
	
}
function a(){
	window.opener=null;
	window.close();
}

function inactive(customerId,mark){
	var con;
	if(mark==0){
		con=confirm("Are you sure active this?"); 
	}else{
		con=confirm("Are you sure inactive this?"); 
	}
	
	if(con==true){
		var url = 'customer!inactive.action?sel_cusid='+customerId+"&mark="+mark;  
		$.ajax({
		     type: "POST",  
		     url: url,		      
		     success: function(data) {
		    	 
		      }
		 });
	}		
}