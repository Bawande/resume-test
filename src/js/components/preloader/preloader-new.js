import helpers from "../../helpers";

import { readyImges } from "./loadImages";

console.log("preloader");

const $parentPreloader = document.querySelector("#preloader");
const $preloaderScene = document.querySelector(".preloader__scene");

helpers.lockScroll(true, $("#preloader"), "preloader");

const removePreloader = () => {
	helpers.lockScroll(false, $("#preloader"), "preloader");

	$parentPreloader.classList.remove("is-visible");

	setTimeout(() => {
		$parentPreloader.style.display = "none";
	}, 300);
};

function preloaderImageLoad() {
	return new Promise(function (resolve, reject) {
		const img = new Image();
		img.onload = resolve;
		img.src = "images/preloader-rocket-man.jpg";
	});
}

const onLoadWindow = () => {
	console.log("on load Window");

	setTimeout(() => {
		removePreloader();
	}, 3000);
};

const contentLoaded = () => {
	console.log("content Loaded");

	const $mediaFiles = document.querySelectorAll("img, video");

	preloaderImageLoad().then(() => {
		console.log("preloader image Loaded");

		const windowHeight = window.screen.height;
		const windowWidth = window.screen.width;

		const $image = document.querySelector(".preloader__image");
		const imageRect = $image.getBoundingClientRect();

		console.log(imageRect);
		console.log($image.scrollHeight);

		const startImagePositionX = imageRect.x;
		const endImagePositionX = windowWidth - imageRect.width;
		const distanceX =
			Math.abs(startImagePositionX) + Math.abs(endImagePositionX);

		const startImagePositionY = imageRect.y;
		const endImagePositionY = 0 - imageRect.height;
		const distanceY =
			Math.abs(startImagePositionY) + Math.abs(endImagePositionY);

		let positionImageX = startImagePositionX;
		let positionImageY = startImagePositionY;

		readyImges(
			(progress) => {
				console.log(startImagePositionY + (distanceY * progress) / 100);

				positionImageX =
					startImagePositionX + (distanceX * progress) / 100;
				positionImageY =
					startImagePositionY - (distanceY * progress) / 100;

				$preloaderScene.style.left = positionImageX + "px";
				$preloaderScene.style.top = positionImageY + "px";
			},
			() => {
				console.log("++++ readyImges ++++");
				removePreloader();
			}
		);
	});

	console.log($mediaFiles.length);
};

window.addEventListener("load", onLoadWindow);
document.addEventListener("DOMContentLoaded", contentLoaded);
