$(function() {
	
	function swapNavBtn(elmn) {
		var hasCls = $(elmn).hasClass('on');
		var iconElm = $(elmn).find('i');
		var navbar = $('.navbar');
		if(hasCls) {
			$(elmn).removeClass('on');
			$(elmn).addClass('off');
			$(iconElm).removeClass('fa-angle-double-left');
			$(iconElm).addClass('fa-bars');
			$(navbar).addClass('nope');
		} else {
			$(elmn).removeClass('off');
			$(elmn).addClass('on');
			$(iconElm).removeClass('fa-bars');
			$(iconElm).addClass('fa-angle-double-left');
			$(navbar).removeClass('nope');
		}
	}

	$(document).on('click','.navbtn',function() {
		swapNavBtn(this);
	});

});