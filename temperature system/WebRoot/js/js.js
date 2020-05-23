

$(function(){


/*index开始*/
$("#sidebar-fold").click(function(){
	$(".sidebar").toggleClass("sidebarClick");
	$(".section-main-wrap").toggleClass("section-main-wrapClick");
	$(".sidebar-nav").children("div").children("span").toggle("slow");
	$(".icon-tool").toggle("slow");
	$(".sidebar-menu").children("li").children("a").children("span").toggle("slow");
	
});


$(".sidebar-title").click(function(){
	
	$(this).next(".sidebar-menu").toggle("slow");
	
	$(this).toggleClass("sidebar-title-active","slow");
});


$(".comments > a").each(function(){
	
	$(this).attr("title",$(this).children(".text").text());
	
});

$(".service-list .icon-chevron-down").click(function(){
	$(this).parent().siblings("div").toggle("slow");
	$(this).toggleClass("rotate");
});
/*index结束*/



/*community开始*/

$(".input > textarea").focus(function(){
	$(this).parent("div").css("border","1px solid #8d2b11")
});

$(".input > textarea").blur(function(){
	$(this).parent("div").css("border","1px solid #ccc")
});


$(".comment-pointer").click(function(){
	$(this).next(".comment-content").toggle("slow");
	$(this).toggleClass("comment-pointer-click","slow");
});


$(".feed-content").hover(function(){
	
	$(this).children(".feed-detail").children(".circle").toggleClass("current");
	
	$(this).sibling("div").children(".feed-detail").children(".circle").removeClass("current");
});


/*community结束*/

/*booking开始*/

$(".detail > .col-md-12").children("a").click(function(){
	$(".booking-track form > div:eq(3)").toggle("slow");
	$(this).children(".icon").toggleClass("display");
});

$(".booking-container tr").click(function(){
	$(this).toggleClass("active");
});
$("#more").click(function(){
	$(this).children("i").toggleClass("up");
	$(".moreRow").toggle("slow");
});

/*booking结束*/




/*customer profile结束*/
	/*demo1开始*/

	$(".contact-info-title").click(function(){
		$(this).siblings().toggle("slow");
	});

$(".demo1Time").datetimepicker({

	minView:'month',

	format:'yyyy-mm-dd',

	weekStart: 1,

	todayBtn:  1,

	autoclose: 1,

	todayHighlight: 1,

	startView: 2,

	forceParse: 0,

	showMeridian: 2


});



	/*demo1结束*/


	/*booking_new开始*/


	
	$('.booking-container .icon-plus-sign').click(function createTr(){
		var tr = $("<tr></tr>");
		var tdG = $("<td></td>").text("40'GP");
		var tdNumber = $("<td></td>").text("1");
		var tdN = $("<td></td>").text("N");
		var tdAdd = $("<td></td>").html('<i class="icon-attachment icon-remove-sign"></i>')
		$(tr).append(tdG,tdNumber,tdN,tdAdd);
		$(".booking-container table").append(tr);
	});

	$(document).on('click','.booking-container .icon-remove-sign',function removeTr(){
		$(this).parent("td").parent('tr').remove();
	});


	$("#iconSave").click(function(){
		if($(".col-md-12.profile").hide){
			$(".col-md-12.profile").show();
		}
		var p = $("<p></p>").html('<a href="#">XD700001</a> BBC Customer From XIAMEN,CHINA to Los ANGLES; 4*40\'GP;Expect Ship Date 2017.1.1');
		$('.col-md-12.profile').append(p);
	});

	/*booking_new结束*/
	
	
	
	/*login开始*/
	$('#defaultForm').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                message: 'The username is not valid',
                validators: {
                    notEmpty: {
                        message: 'The username is required and can\'t be empty'
                    },
                    // stringLength: {
                        // min: 6,
                        // max: 30,
                        // message: 'The username must be more than 6 and less than 30 characters long'
                    // },
                    // regexp: {
                        // regexp: /^[a-zA-Z0-9_\.]+$/,
                        // message: 'The username can only consist of alphabetical, number, dot and underscore'
                    // }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required and can\'t be empty'
                    }
                }
            }
        }
    });	
	/*login结束*/

	
	
	
	
	
});











