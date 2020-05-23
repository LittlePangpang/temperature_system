<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>

<html lang="en">

    
<head>     
	<meta charset="utf-8">    
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<%
	  String baseUrl = request.getContextPath();
	%>
	<link rel="stylesheet" href="<%= baseUrl%>/bootstrap/css/bootstrap.min.css">       
	<link rel="stylesheet" href="<%= baseUrl%>/font-awesome/css/font-awesome.min.css">		
	<link rel="stylesheet" href="<%= baseUrl%>/css/form-elements.css">    
	<link rel="stylesheet" href="<%= baseUrl%>/css/style.css">            
	<link rel="shortcut icon" href="ico/logo_small.png">        
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="<%= baseUrl%>/ico/apple-touch-icon-144-precomposed.png">        
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="<%= baseUrl%>/ico/apple-touch-icon-114-precomposed.png">       
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="<%= baseUrl%>/ico/apple-touch-icon-72-precomposed.png">       
	<link rel="apple-touch-icon-precomposed" href="<%= baseUrl%>/ico/apple-touch-icon-57-precomposed.png">   
	<script src="<%= baseUrl%>/js/jquery-1.11.1.min.js"></script>      
	<script src="<%= baseUrl%>/bootstrap/js/bootstrap.min.js"></script>      
	<script src="<%= baseUrl%>/js/jquery.backstretch.min.js"></script>      
	<script src="<%= baseUrl%>/js/scripts.js"></script>
	<title>气温检测系统</title> 
	<style type='text/css'>  
        #code{  
            font-family:Arial,宋体;  
            font-style:italic;  
            color:green;  
            border:0;  
            padding:2px 3px;  
            letter-spacing:3px;  
            font-weight:bolder;  
        }  
    </style>  
	<script type="text/javascript" > 
	$(document).ready(function(){
		createCode();
	});
		function login(){
			var inputCode = document.getElementById("input").value.toUpperCase(); //取得输入的验证码并转化为大写          
            if(inputCode.length <= 0) { //若输入的验证码长度为0    
                alert("请输入验证码！"); //则弹出请输入验证码    
            }else if(inputCode != code ) { //若输入的验证码与产生的验证码不一致时    
                alert("验证码输入错误！@_@"); //则弹出验证码输入错误    
                createCode();//刷新验证码    
                document.getElementById("input").value = "";//清空文本框    
            }else { //输入正确时    
            	var username=$('#username').val();
            	var password=$('#password').val();
            	if(username=="" || password==""){
            		alert("请输入用户名和密码！")
            	}else{
            		document.loginform.submit();
            	}                
            }  
			
		};
		 var code ; //在全局定义验证码    
         
        function createCode(){  
             code = "";     
             var codeLength = 4;//验证码的长度    
             var checkCode = document.getElementById("code");     
             var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',    
             'S','T','U','V','W','X','Y','Z');//随机数    
             for(var i = 0; i < codeLength; i++) {//循环操作    
                var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）    
                code += random[index];//根据索引取得随机数加到code上    
            }    
            checkCode.value = code;//把code值赋给验证码    
        }        
	</script>        	       
</head>
<body>   
<!-- Top content -->
        <div class="top-content">
        	
            <div class="inner-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 col-sm-offset-2 text">
                        	<h1><img src="<%= baseUrl%>/ico/logo_small.png"/> 气温检测系统</h1>                                                     
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-sm-offset-3 form-box">
                        	<div class="form-top">
                        		<div class="form-top-left">
                        			<!--  <h3>Login to our site</h3>-->
                            		<p>请输入用户名密码:</p>
                        		</div>
                        		<div class="form-top-right">
                        			<i class="fa fa-key"></i>
                        		</div>
                            </div>
                            <div class="form-bottom">
			                    <form class="" name="loginform" id="loginform" action="<%= baseUrl%>/login" method="post">
			                    	<div class="form-group">
			                    		<label class="sr-only" for="form-username">用户名</label>
			                        	<input type="text" name="username" placeholder="用户名..." class="form-username form-control" id="username">
			                        </div>
			                        <div class="form-group">
			                        	<label class="sr-only" for="form-password">密码</label>
			                        	<input type="password" name="password" placeholder="密码..." class="form-password form-control" id="password">			                       		
			                        </div>
			                        <div class="form-group">
			                        	<input type = "text" id = "input"/>    
            							<input type="button" id="code" onclick="createCode()" style="width:60px" title='点击更换验证码' /> 			                       		
			                        </div>
			                        <div class="form-group">
			                        	<c:if test="${!empty errMsg}">
								        	<div class="alert alert-error"><font size="3" color="#FF4500">${errMsg}</font></div>
										</c:if>
			                        </div>
			                        <div class="form-group">
			                        	<button class="btn btn-large btn-primary" type="button" onclick="login()">登录</button>
			                        </div>
			                    </form>
		                    </div>
                        </div>
                    </div>                
                </div>
            </div>
            
        </div>
</body>

</html>