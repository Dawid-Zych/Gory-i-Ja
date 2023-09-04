/* global Swiper */
document.addEventListener('DOMContentLoaded', function () {
	const swiper = new Swiper('.swiper', {
		// Optional parameters
		loop: true,

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
});
