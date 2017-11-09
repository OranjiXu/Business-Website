var x; 
$(document).ready(function(){
	$('.light-box').fadeOut();
	$('.main-menu').slideUp();
	$(".sub-menu").animate({right:'-100%'});
	$(".light-box2").css("display","none");
	$('body').css("overflow","auto");
/*
//當螢幕寬度改變則自動重新整理網頁

  var $window = $(window);
  function checkWidth() {
      var windowsize = $window.width();//取得螢幕寬度
      location.reload(); //重新整理刷新網頁
  }
  var resizeId;
  $(window).resize(function() {
    clearTimeout(resizeId);
    resizeId = setTimeout(checkWidth, 100); //當停止螢幕拖拉才執行
  });*/

/*
$('.nav-lg>li').mouseenter(function(){
$('.main-menu').show();
//alert("The paragraph is now hidden"); 
$('.main-menu').slideDown(300,function(){
	$('.light-box').fadeIn(200);
});

});*/
$(window).resize(function(){

x=$(window).width();//取得視窗寬度

if (x >768 ) {//執行項目
$(".sub-menu").animate({right:'-100%'});
$(".light-box2").css("display","none");
$('body').css("overflow","auto");
//location.reload();
$('.light-box').mouseenter(function(){

//alert("The paragraph is now hidden");
$('.light-box').fadeOut();
$('.main-menu').slideUp();

});


$(".nav-lg-item").each(function (i) {
    $(this).mouseenter(function () {
        $('.main-menu>section').hide();
        $('#list'+(i+1)).show();
        //$('.main-menu').show();
		//alert("The paragraph is now hidden"); 
		$('.main-menu').slideDown(300,function(){
		$('.light-box').fadeIn(200);
		});


    });
});

$("#sub-menu-control").click(function(){
	$("aside").css("display","block");
	$("aside").animate({left:'0px'});
	//$("#darklight").css("display","block");
});


}
else {

$('.light-box').fadeOut();
$('.main-menu').slideUp();

$("#sub-menu-control").click(function(){
$(".sub-menu").css("display","block");
$(".sub-menu").animate({right:'0px'});
$(".light-box2").css("display","block");
$('body').css("overflow","hidden");
});

$("[href],.light-box2").click(function(){
$(".sub-menu").animate({right:'-100%'});
$(".light-box2").css("display","none");
$('body').css("overflow","auto");
});

}

});

x=$(window).width();//取得視窗寬度

if (x >768 ) {//執行項目

//location.reload();
$('.light-box').mouseenter(function(){

//alert("The paragraph is now hidden");
$('.light-box').fadeOut();
$('.main-menu').slideUp();

});


$(".nav-lg-item").each(function (i) {
    $(this).mouseenter(function () {
        $('.main-menu>section').hide();
        $('#list'+(i+1)).show();
        //$('.main-menu').show();
		//alert("The paragraph is now hidden"); 
		$('.main-menu').slideDown(300,function(){
		$('.light-box').fadeIn(200);
		});


    });
});

$("#sub-menu-control").click(function(){
	$("aside").css("display","block");
	$("aside").animate({left:'0px'});
	//$("#darklight").css("display","block");
});


}
else {
$("#sub-menu-control").click(function(){
$(".sub-menu").css("display","block");
$(".sub-menu").animate({right:'0px'});
$(".light-box2").css("display","block");
$('body').css("overflow","hidden");
});

$("[href],.light-box2").click(function(){
$(".sub-menu").animate({right:'-100%'});
$(".light-box2").css("display","none");
$('body').css("overflow","auto");
});

}
 
});