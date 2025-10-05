/* global Swiper */
document.addEventListener('DOMContentLoaded', function () {
	const swiper = new Swiper('.swiper', {
		// Optional parameters
		loop: true,
		autoplay: {
			delay: 4000, // co ile ms ma się zmieniać slajd
			disableOnInteraction: false, // nie zatrzymuj po kliknięciu
		},
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
});
