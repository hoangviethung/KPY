import { getSVGs, Loading } from "./utilities/util";
import Axios from "axios";
import * as animation from "./animations/animation";
declare var Swiper: any;
declare var WOW: any;

// TOGGLE NAVBAR
const toggleNavBar = () => {
	const btn = document.querySelector(".navBarHamburger__mainWrapper");
	const body = document.querySelector(".App-Animation");
	const navBar = document.querySelector(".NavBar");
	const navBar__items = navBar.querySelectorAll(".nav-item");
	btn.addEventListener("click", (e) => {
		btn.classList.toggle("active");
		body.classList.toggle("animated");
		navBar.classList.toggle("animated");
	});
	// INIT TIMEDELAY
	navBar__items.forEach((item: any, index: any) => {
		item.setAttribute("style", `--delay-out: ${(index + 5) * 0.1}s`);
	});
};

// INIT MAIN SLIDER
const initMainSliderBanner = () => {
	let mainSlider = new Swiper(".main-slider-banner .swiper-container", {
		direction: "vertical",
		effect: "fade",
		slidesPerView: 1,
		loop: true,
		speed: 2000,
		simulateTouch: false,
		autoplay: {
			delay: 3000,
		},
		pagination: {
			clickable: true,
			el: ".swiper-pagination",
			type: "bullets",
		},
		on: {
			slideChange: function () {
				// RESET
				Array.from(this.slides).forEach((item: any) => {
					const titlesRemove = item.querySelectorAll(
						".banner__text .title",
					);
					titlesRemove.forEach((title: any) => {
						title.classList.remove("animated");
					});
				});
				// GET ALL TITLE
				const titles = this.slides[this.activeIndex].querySelectorAll(
					".banner__text .title",
				);
				// ADD CLASS ANIMATED
				titles.forEach((item: any) => {
					item.classList.add("animated");
				});
				// RUN ANIMATE / TRUYỀN PARAM VÀO FUNCTION
				setTimeout(() => {
					animation.allAnimeMainSlider(
						".banner__text .title.animated",
					);
				}, 1000);
			},
		},
	});
};

// INIT INDEX ABOUT SLIDER
const intitSliderAboutIndexPage = () => {
	let AboutIndexPage = new Swiper(".slider-index-about .swiper-container", {
		centeredSlides: true,
		centeredSlidesBounds: true,
		loop: true,
		speed: 2000,
		simulateTouch: false,
		autoplay: {
			delay: 2000,
		},
		slidesPerView: 1.3,
		spaceBetween: 10,
		breakpoints: {
			1025: {
				slidesPerView: 1,
				spaceBetween: 50,
			},
			768: {
				spaceBetween: 25,
				slidesPerView: 1.8,
			},
		},
	});
};

// INIT INDEX SERVICE SLIDER
const initSliderServiceIndexPage = () => {
	let ServicetIndexPage = new Swiper(
		".slider-index-service .swiper-container",
		{
			centeredSlides: true,
			slidesPerView: 1,
			simulateTouch: false,
			loop: true,
			speed: 1500,
			autoplay: {
				delay: 2000,
			},
			loopedSlides: 3,
			navigation: {
				prevEl: ".index-service-prev-slider",
				nextEl: ".index-service-next-slider",
			},
			breakpoints: {
				320: {
					slidesPerView: 1.4,
					spaceBetween: 10,
				},
				768: {
					spaceBetween: 0,
				},
				1025.98: {
					spaceBetween: -100,
				},
				1440: {
					spaceBetween: -135,
				},
			},
		},
	);
};

// INIT INDEX GARELLY SLIDER
const initSliderGarellyIndexPage = () => {
	let ServicetIndexPage = new Swiper(
		".slider-index-gallery .swiper-container",
		{
			simulateTouch: false,
			loop: true,
			speed: 2000,
			autoplay: {
				delay: 1000,
			},
			spaceBetween: 28,
			navigation: {
				prevEl: ".index-gallery-prev-slider",
				nextEl: ".index-gallery-next-slider",
			},
			breakpoints: {
				600: {
					slidesPerView: 2,
				},
				1025: {
					slidesPerView: 3,
				},
			},
		},
	);
};

// INIT INDEX NEWS SLIDER
const initSliderNewsIndexPage = () => {
	let NewsIndexPage = new Swiper(".slider-index-news .swiper-container", {
		centeredSlides: true,
		simulateTouch: false,
		loop: true,
		speed: 2000,
		// autoplay: {
		// 	delay: 1000,
		// },
		spaceBetween: 0,
		navigation: {
			prevEl: ".index-news-prev-slider",
			nextEl: ".index-news-next-slider",
		},
		breakpoints: {
			1025: {
				slidesPerView: 3,
				spaceBetween: -15,
			},
			600: {
				slidesPerView: 2,
				spaceBetween: -15,
			},
		},
	});
};

// INIT INDEX CLIENTS SLIDER
const initSliderClientsIndexPage = () => {
	let NewsIndexPage = new Swiper(".slider-index-clients .swiper-container", {
		simulateTouch: false,
		loop: true,
		speed: 2000,
		autoplay: {
			delay: 1000,
		},
		spaceBetween: 10,
		navigation: {
			prevEl: ".index-clients-prev-slider",
			nextEl: ".index-clients-next-slider",
		},
		breakpoints: {
			1025: {
				spaceBetween: 20,
			},
			1440: {
				spaceBetween: 40,
				slidesPerView: 3,
				centeredSlides: true,
			},
			768: {
				slidesPerView: 2,
			},
		},
	});
};

// INIT PROJECTS NEWS SLIDER
const initSliderProjectsIndexPage = () => {
	let ProjectsIndexPageThumb = new Swiper(
		".slider-index-projects-thumb .swiper-container",
		{
			slidesPerView: 3,
			simulateTouch: false,
			loop: true,
			grabCursor: true,
			freeMode: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			speed: 1500,
			spaceBetween: 20,
		},
	);
	let ProjectsIndexPage = new Swiper(
		".slider-index-projects-review .swiper-container",
		{
			slidesPerView: 1,
			simulateTouch: false,
			loop: true,
			speed: 2000,
			// autoplay: {
			// 	delay: 1000,
			// },
			spaceBetween: 0,
			navigation: {
				prevEl: ".index-projects-prev-slider",
				nextEl: ".index-projects-next-slider",
			},
			thumbs: {
				swiper: ProjectsIndexPageThumb,
			},
			breakpoints: {
				1600: {
					slidesPerView: 1.8,
				},
				1025: {
					slidesPerView: 1.3,
					spaceBetween: -75,
				},
			},
			on: {
				init: function () {
					const width = document.querySelector(
						".slider-index-projects-review .swiper-slide-active",
					).clientWidth;
					const wrapper = document.querySelector(
						".slider-index-projects-thumb-wrapper",
					);
					wrapper.setAttribute("style", `max-width:${width}px`);
				},
			},
		},
	);
};

// SET HEIGHT TEXT WRAPPER
const setHeightTextWrapper = () => {
	const height__items = document.querySelectorAll(".banner__text .text");
	const backgrounds = document.querySelectorAll(
		".banner__text .background-multiply",
	);
	height__items.forEach((item, index) => {
		backgrounds[index].setAttribute(
			"style",
			`height:${item.clientHeight}px`,
		);
	});
};

// INIT WOW JS
const initWowJs = () => {
	new WOW({
		boxClass: "wow",
		animateClass: "animated",
		offset: 100,
		mobile: true,
		live: true,
		callback: function (box: any) {},
		scrollContainer: null,
		resetAnimation: true,
	}).init();
};

document.addEventListener("DOMContentLoaded", async () => {
	// GET SVG
	getSVGs(".svg");
	// LOADING
	Loading();
	// INIT WOW JS
	initWowJs();
	// TOGGLE NAVBAR
	toggleNavBar();
	// INIT MAIN SLIDER
	initMainSliderBanner();
	// SET HEIGHT TEXT WRAPPER
	setHeightTextWrapper();
	// INIT INDEX ABOUT SLIDER
	intitSliderAboutIndexPage();
	// INIT INDEX SERVICE SLIDER
	initSliderServiceIndexPage();
	// INIT INDEX GARELLY SLIDER
	initSliderGarellyIndexPage();
	// INIT INDEX NEWS SLIDER
	initSliderNewsIndexPage();
	// INIT INDEX CLIENTS SLIDER
	initSliderClientsIndexPage();
	// INIT PROJECTS NEWS SLIDER
	initSliderProjectsIndexPage();
});
