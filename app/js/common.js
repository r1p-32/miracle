$(function() {

	$('.gallery-slider').slick({
		accessibility: false,
		infinite: false,
		prevArrow: '<button type="button" class="slick-prev"><span><</span> Prev</button>',
		nextArrow: '<button type="button" class="slick-next">Next <span>></span></button>',
		slidesToShow: 5,
		rows: 2,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1440,
			settings: {
				slidesToShow: 4
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});

	$('.events-slider').slick({
		accessibility: false,
		infinite: false,
		prevArrow: '<button type="button" class="slick-prev"><span><</span> Prev</button>',
		nextArrow: '<button type="button" class="slick-next">Next <span>></span></button>',
		slidesToShow: 3,
		rows: 2,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});

	$('.btn-nav').click(function(){
		$(this).toggleClass('active');
		$('.nav').slideToggle();
	});

	$('.video-popup').magnificPopup({
		type: 'iframe'
	});

	$('.img-popup').magnificPopup({
		type: 'image'
	});

	$('.inline-popup').magnificPopup({
		type: 'inline'
	});

});
