/* global Swiper */
document.addEventListener('DOMContentLoaded', function () {
	const swiper = new Swiper('.swiper', {
		// Optional parameters
		loop: true,
		speed: 1000, // płynność – im większe, tym wolniejsze przejście (w ms)
		effect: 'fade', // płynne przenikanie slajdów
		fadeEffect: {
			crossFade: true,
		},
		autoplay: {
			delay: 4000, // lekko wolniej
			disableOnInteraction: false,
		},
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	const swiperEl = document.querySelector('.swiper');

	swiperEl.addEventListener('mouseenter', () => swiper.autoplay.stop());
	swiperEl.addEventListener('mouseleave', () => swiper.autoplay.start());
});
