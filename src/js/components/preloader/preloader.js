import anime from "animejs/lib/anime.es.js";
import helpers from "../../helpers";

helpers.lockScroll(true, $("#preloader"), "preloader");

const loatedMedia = () => {
	const $preloader = document.getElementById("preloader");
	const mediaFiles = document.querySelectorAll("img, video");

	console.log("loatedMedia");

	[].forEach.call(mediaFiles, (_, index, array) => {
		if (index == array.length - 1) {
			$preloader.classList.remove("is-visible");
		}
	});

	setTimeout(() => {
		$preloader.style.display = "none";
	}, 300);

	helpers.lockScroll(false, $("#preloader"), "preloader");
};

const startPreloaderAnime = (
	screenWidth,
	screenHeight,
	parentWidth,
	parentHeight,
	timeLoated,
	callback
) => {
	anime({
		targets: ".preloader__scene",
		translateX: [
			{
				value: parentWidth * -1,
				duration: 50,
			},
			{
				value: screenWidth / 5,
				duration: Math.round(timeLoated * 0.8),
			},
			{
				value: screenWidth,
				duration: Math.round(timeLoated * 0.2),
				easing: "linear",
			},
		],
		translateY: [
			{
				value: screenHeight,
				duration: 50,
			},
			{
				value: screenHeight / 2,
				duration: Math.round(timeLoated * 0.8),
			},
			{
				value: parentHeight * -1,
				duration: Math.round(timeLoated * 0.2),
				easing: "linear",
			},
		],
		opacity: [0, 1],
		complete: () => {
			callback();
		},
	});
};

document.addEventListener("DOMContentLoaded", () => {
	const $parent = document.querySelector("#preloader");
	const $parentImage = document.querySelector(".preloader__scene");
	const $image = $parentImage.querySelector("img");

	const parentWidth = $parentImage.offsetWidth;
	const parentHeight = $parentImage.offsetHeight;
	const screenWidth = window.innerWidth;
	const screenHeight = window.innerHeight;
	const minTimeLoated = 3000;

	if (!$parent.closest(".is-visible")) {
		$parent.classList.add("is-visible");
	}

	if ($image) {
		$image.onload = () => {
			startPreloaderAnime(
				screenWidth,
				screenHeight,
				parentWidth,
				parentHeight,
				minTimeLoated,
				loatedMedia
			);
		};
	} else {
		$parent.classList.remove("is-visible");
		helpers.lockScroll(false, $("#preloader"), "preloader");
	}

	if (window.document.documentMode) {
		// Do IE stuff
		setTimeout(() => {
			if ($parent.closest(".is-visible")) {
				$parent.classList.remove("is-visible");
				helpers.lockScroll(false, $("#preloader"), "preloader");
			}
		}, 2500);
	}
});
