import { getSVGs, Loading } from "./utilities/util";
import Axios from "axios";
import * as animation from "./animations/animation";
declare var Swiper: any;

// TOGGLE NAVBAR
const toggleNavBar = () => {
	const btn = document.querySelector(".navBarHamburger__mainWrapper");
	const body = document.querySelector(".App-Animation");
	const navBar = document.querySelector(".NavBar");
	btn.addEventListener("click", (e) => {
		btn.classList.toggle("active");
		body.classList.toggle("animated");
		navBar.classList.toggle("animated");
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
		slidesPerView: 1,
		spaceBetween: 50,
		centeredSlides: true,
		centeredSlidesBounds: true,
		loop: true,
		speed: 2000,
		simulateTouch: false,
		autoplay: {
			delay: 2000,
		},
	});
};

// INIT INDEX SERVICE SLIDER
const initSliderServiceIndexPage = () => {
	let ServicetIndexPage = new Swiper(
		".slider-index-service .swiper-container",
		{
			centeredSlides: true,
			slidesPerView: "auto",
			simulateTouch: false,
			loop: true,
			speed: 1500,
			// autoplay: {
			// 	delay: 2000,
			// },
			spaceBetween: 36,
			navigation: {
				prevEl: ".index-service-prev-slider",
				nextEl: ".index-service-next-slider",
			},
		},
	);
};

// INIT INDEX GARELLY SLIDER
const initSliderGarellyIndexPage = () => {
	let ServicetIndexPage = new Swiper(
		".slider-index-gallery .swiper-container",
		{
			slidesPerView: 3,
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
		},
	);
};

const initSliderNewsIndexPage = () => {
	let NewsIndexPage = new Swiper(".slider-index-news .swiper-container", {
		slidesPerView: 3,
		centeredSlides: true,
		simulateTouch: false,
		loop: true,
		speed: 2000,
		// autoplay: {
		// 	delay: 1000,
		// },
		spaceBetween: -15,
		navigation: {
			prevEl: ".index-news-prev-slider",
			nextEl: ".index-news-next-slider",
		},
	});
};

const initSliderClientsIndexPage = () => {
	let NewsIndexPage = new Swiper(".slider-index-clients .swiper-container", {
		slidesPerView: 3,
		centeredSlides: true,
		simulateTouch: false,
		loop: true,
		speed: 2000,
		autoplay: {
			delay: 1000,
		},
		spaceBetween: 40,
		navigation: {
			prevEl: ".index-clients-prev-slider",
			nextEl: ".index-clients-next-slider",
		},
	});
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

document.addEventListener("DOMContentLoaded", async () => {
	// GET SVG
	getSVGs(".svg");
	// LOADING
	Loading();
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
	initSliderClientsIndexPage();
});
