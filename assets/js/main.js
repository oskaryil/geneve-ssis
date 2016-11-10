$(document).ready(function() {

	var navHeight = $('nav').height();
	var windowHeight = $(window).height();

	$('.intro-section').css('padding-top', navHeight)
	$('.jumbotron').css('height', windowHeight);

	$(window).scroll(function() {

		if($(window).width() > 600) {	
			var height = $(window).scrollTop();
			if(height > 500) {
				$('.back-to-top i').fadeIn();
			} else {
				$('.back-to-top i').fadeOut();
			}
		}
	});

	$('nav a').on('click', function() {
		$('.navbar-collapse').collapse('hide');
	});

	if($('.back-to-top i').css('display') !== 'none') {
		$('[data-toggle="tooltip"]').tooltip();
	}

});