$(document).ready(function(){
	$('#header__icon').click(function(e){
		e.preventDefault();
		$('body').toggleClass('with--sidebar');
	});
    
    $('#site-cache').click(function(e){
      $('body').removeClass('with--sidebar');
    });
    
	$(window).resize(function() {
		var element = $('#search');
		if($(window).width()<584 && !$('.menu #search').length) {
			element.detach();
			$('.menu').prepend(element);
		} else if($(window).width()>=584 && $('.menu #search').length){
			element.detach();
			$('header').append(element);
		}


		var leftDivHeight = $('#left').height();
		var offset = 90; //(-9) + 30
		$('#right').css('height', (leftDivHeight+offset)+'px');
		if($(window).width()<640) {
			$('#right').css({"height":"auto","overflow-y":"auto"});
		}

    	
	});
	$(window).trigger('resize');

	$('#changeMe').html("<p>WhitewaterWorld.com &copy;"+(new Date()).getFullYear()+" | contact@maxmastalerz.com</p>");
});