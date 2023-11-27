$(document).ready(function () {


//모바일 메뉴

	$('header .menu_btn').on('click', function (){
		$('#mask').fadeIn('fast');
		$('.side_gnb').addClass('on');
		$('#wrap').addClass('not_scroll');
	});
	$('header .close_menu').on('click', function (){
		$('.side_gnb').removeClass('on');
		$('#mask').fadeOut('fast');
		$('#wrap').removeClass('not_scroll');
	});
	$('#mask').on('click', function () {
		$('header .close_menu').click();
	});










});