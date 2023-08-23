console.log("preloader");

function preloaderImageLoad() {
	return new Promise(function (resolve, reject) {
		const $image = document.querySelector(".preloader__image > img");
		$image.onload = resolve;
	});
}

const onLoad = () => {
	console.log("on load");
};

const contentLoaded = () => {
	console.log("content Loaded");

	preloaderImageLoad().then(() => {
		console.log("preloader image Loaded");
	});
};

window.addEventListener("load", onLoad);
document.addEventListener("DOMContentLoaded", contentLoaded);
