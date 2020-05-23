function autocomplete(elementID,actionname,lwidth){
    $("#"+elementID).autocomplete(actionname,
    	    {  
	    	   minChars: 1,  //最小显示条数
	    	   //max: 15,  //最大显示条数
    		   scroll: true,	//最多可以显示150个结果
    		   scrollHeight: 300,
	    	   autoFill: false,
	    	   matchContains: true,//把输入的字符与所有字符进行任何位置可能的匹配
	    	   //mustMatch: true,
	    	   width: lwidth,
	    	   dataType : "json",  //指定数据类型的渲染方式
	    	   extraParams:{
	    		 pol:function(){
				 return encodeURI($("#"+elementID).val());//url参数传递
				}
	    	   },
	    	   //进行对返回数据的格式处理
	    	   parse: function(data){
	    	    var rows = [];
	    	    var d = data.content;
	    	    if(d==null){
	    	    //此处加if else语句是因为mustMatch
	    	    //alert(3);
	    	    }else{
		    	    for(var i=0; i<d.length; i++){
		    	     rows[rows.length] = {
		    	       data:d[i],
		    	       value:d[i].pol,
		    	       result:d[i].pol
		    	     };
		    	    }
	    	    }
	    	    return rows;
	    	   },
	    	   formatItem: function(row,i,n) {
	    		 //没有特殊的要求,就直接返回了
	    	    return row.pol;
	    	   }
	    	  });	
}
/*可以多选函数*/
function autocompleteMultiple(elementID,actionname,lwidth){
$("#"+elementID).autocomplete(actionname,
	    {  
    	   minChars: 1,  //最小显示条数
    	   //max: 15,  //最大显示条数
    	   multiple: true,
    	   multipleSeparator: ';',
		   scroll: true,	//最多可以显示150个结果
		   scrollHeight: 300,
    	   autoFill: false,
    	   matchContains: true,//把输入的字符与所有字符进行任何位置可能的匹配
    	   //mustMatch: true,
    	   width: lwidth,
    	   dataType : "json",  //指定数据类型的渲染方式
    	   extraParams:{
    		 pol:function(){
	    		 var loStr = $("#"+elementID).val();
	    		 var loInt = loStr.lastIndexOf(';');
	    		 if(loInt >= 0){//此时已经开始多选了(;最后出现的位置)
	    		 	loStr = loStr.substr(loInt+1,1000);
	    		 }
				 return encodeURI(loStr);//url参数传递
			}
    	   },
    	   //进行对返回数据的格式处理
    	   parse: function(data){
    	    var rows = [];
    	    var d = data.content;
    	    if(d==null){
    	    //此处加if else语句是因为mustMatch
    	    //alert(3);
    	    }else{
	    	    for(var i=0; i<d.length; i++){
	    	     rows[rows.length] = {
	    	       data:d[i],
	    	       value:d[i].pol,
	    	       result:d[i].pol
	    	     };
	    	    }
    	    }
    	    return rows;
    	   },
    	   formatItem: function(row,i,n) {
    		 //没有特殊的要求,就直接返回了
    	    return row.pol;
    	   }
    });
}
/*必须匹配函数*/
function autocompleteMustMatch(elementID,actionname,lwidth){
    $("#"+elementID).autocomplete(actionname,
    	    {  
	    	   minChars: 1,  //最小显示条数
	    	   //max: 15,  //最大显示条数
    		   scroll: true,	//最多可以显示150个结果
    		   scrollHeight: 300,
	    	   autoFill: false,
	    	   matchContains: false,//把输入的字符与所有字符进行任何位置可能的匹配
	    	   mustMatch: true,
	    	   width: lwidth,
	    	   dataType : "json",  //指定数据类型的渲染方式
	    	   extraParams:{
	    		 pol:function(){
				 return $("#"+elementID).val();//url参数传递
				}
	    	   },
	    	   //进行对返回数据的格式处理
	    	   parse: function(data){
	    	    var rows = [];
	    	    var d = data.content;
	    	    if(d==null){
	    	    //此处加if else语句是因为mustMatch
	    	    //alert(3);
	    	    }else{
	    	    	//alert(d);
		    	    for(var i=0; i<d.length; i++){
		    	     rows[rows.length] = {
		    	       data:d[i],
		    	       value:d[i].pol,
		    	       result:d[i].pol
		    	     };
		    	    }
	    	    }
	    	    return rows;
	    	   },
	    	   formatItem: function(row,i,n) {
	    		 //没有特殊的要求,就直接返回了
	    	    return row.pol;
	    	   }
	    	  });	
}