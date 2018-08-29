$(function() {
	
	var winScrollTop = $(window).scrollTop();
	// var contentOffset = $('.firstMainSect').offset().top;
	var contentOffset = ($('.sectTopFullMain').offset().top) + ($('.sectTopFullMain').height());
	if(winScrollTop <= contentOffset) {
		$('.sectNavbar').hide(0);
	} else {
		$('.sectNavbar').addClass('showNoAnim');
		$('.sectNavbar').addClass('show');
	}

	// $(window).resize(_.throttle(function() {
	// 	var contentOffset = ($('.sectTopFullMain').offset().top) + ($('.sectTopFullMain').height());
	// }, 50));
	
	$(window).scroll(_.throttle(function() {
		console.log('scroll event');
		var contentOffset = ($('.sectTopFullMain').offset().top) + ($('.sectTopFullMain').height());
		var winScrollTop = $(window).scrollTop();
		// $('.sect-head').text(winScrollTop);
		if(winScrollTop > contentOffset) {
			$('.sectNavbar').removeClass('hide');
			$('.sectNavbar').addClass('show');
			$('.sectNavbar').show(0,function() {
				$('.sectNavbar').removeClass('showNoAnim');
			});
		} else {
			$('.sectNavbar').removeClass('show');
			$('.sectNavbar').addClass('hide');
			$('.sectNavbar').removeClass('showNoAnim');
			// $('.sectNavbar').hide();
		}
	}, 500));

	// $('.mainBlogTitle').on('click', function() {
	// 	$('html, body').animate({
	// 		scrollTop: ($('body').offset().top + $('body').height())
	// 	}, 800);
	// });

	$('.ftSideBtn').on('click', function() {
		$('html, body').animate({
			scrollTop: ($('body').offset().top)
		}, 750);
	});

});