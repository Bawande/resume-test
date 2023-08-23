import helpers from "../../helpers";

import { readyImges } from "./loadImages";

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
	setTimeout(() => {
		removePreloader();
	}, 3000);
};

const contentLoaded = () => {
	const $mediaFiles = document.querySelectorAll("img, video");

	preloaderImageLoad().then(() => {
		const windowHeight = window.screen.height;
		const windowWidth = window.screen.width;

		const $image = document.querySelector(".preloader__image");
		const imageRect = $image.getBoundingClientRect();

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
				positionImageX =
					startImagePositionX + (distanceX * progress) / 100;
				positionImageY =
					startImagePositionY - (distanceY * progress) / 100;

				$preloaderScene.style.left = positionImageX + "px";
				$preloaderScene.style.top = positionImageY + "px";
			},
			() => {
				removePreloader();
			}
		);
	});
};

window.addEventListener("load", onLoadWindow);
document.addEventListener("DOMContentLoaded", contentLoaded);
