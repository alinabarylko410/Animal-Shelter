$(document).ready(function() {
	$(".owl-carousel").owlCarousel({
		loop: true,
		responsive: {
			0: {
				items: 1,
				dots: true
			},
			768: {
				items: 2,
				dots: true
			},
			1024: {
				items: 3
			},
		},
		margin: 50,
		nav: true,
		dots: true,
	});
		
});