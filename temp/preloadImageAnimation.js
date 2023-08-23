const preloadImageAnimation = (progres) => {
	const windowWidth = window.screen.height;
	const windowHeight = window.screen.width;

	const $image = document.querySelector(".preloader__image");
	const imageRect = $image.getBoundingClientRect();

	const startImagePositionTop = windowWidth + imageRect.width;
	const startImagePositionRight = 0 - imageRect.height;

	const endImagePositionTop = 0 + imageRect.width;
	const endImagePositionRight = windowHeight + imageRect.height;

	console.log("startImagePositionTop", startImagePositionTop);
	console.log("startImagePositionRight", startImagePositionRight);
	console.log("endImagePositionTop", endImagePositionTop);
	console.log("endImagePositionRight", endImagePositionRight);
};

export default preloadImageAnimation;
