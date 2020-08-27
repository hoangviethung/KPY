declare var anime: any;

export const allAnimeMainSlider = (title: any) => {
	animationTitleMainSlider(title);
};

const animationTitleMainSlider = (selector: any) => {
	// Wrap every letter in a span
	const texts = document.querySelectorAll(`${selector}`);
	texts.forEach((item) => {
		item.innerHTML = item.textContent.replace(
			/\S/g,
			"<span class='letter'>$&</span>",
		);
	});
	anime.timeline({ loop: false }).add({
		targets: `${selector} .letter`,
		translateY: ["1.1em", 0],
		translateX: ["0.55em", 0],
		translateZ: 0,
		rotateZ: [180, 0],
		duration: 750,
		easing: "easeOutExpo",
		delay: (el: any, i: any) => 70 * i,
	});
};
