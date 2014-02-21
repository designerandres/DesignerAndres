// JavaScript Document
if ($(window).width() > 980) {
	function setEqualHeight(columns) { 
		var tallestcolumn = 0;
		columns.each(function() {
			currentHeight = $(this).height();
			if(currentHeight > tallestcolumn) {
				tallestcolumn = currentHeight;
			}
		});
		columns.height(tallestcolumn);
	}
	$(document).ready(function() {
		setEqualHeight($(".bodyCardThirds"));
	});
	$(window).resize(function() {
		setEqualHeight($(".bodyCardThirds"));
	});
}
$(document).ready(function() {
	$('.menuButton').show();
	$('.navigation').hide();
	
	$('.menuButton').click(function(){
		if($('.navigation').is(':hidden')){
			$('.navigation').slideDown('fast',function(){});
		} else {
			$('.navigation').slideUp('fast',function(){});
		}
	});
			
	function menuButtonFct(){
		if($(window).width() > 480){
			$('.menuButton').hide();
			$('.navigation').css('display','inline-block');
		} else {
			$('.navigation').hide();
			$('.menuButton').show();
		}
		if($(window).width() > 980){
			$(window).scroll(function() {
				  var scrolledY = $(window).scrollTop();
				  $('#bodyBanner').css('background-position', 'center ' + ((scrolledY*.8)) + 'px');
				});
/*			//$('#bodyBanner').stop().css({ backgroundPosition: 'center ' + (Math.floor(scrollTop*.5)) + 'px' });
			var parallaxDiv = document.getElementById('bodyBanner');
			window.onscroll = function (e) {
				
				var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
						
				parallaxDiv.style.backgroundPosition = 'center ' + -(scrollTop * 0.5) + 'px';
			}
*/		}
	}
	menuButtonFct();
	
	$(window).resize(function(){
		menuButtonFct();
	});
	
});