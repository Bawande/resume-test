const urlImages = [
	"images/icon-company_21vek-by.jpg",
	"images/icon-company_Integral.jpg",
	"images/icon-company_j-creative-solutions.jpg",
	"images/icon-company_oz-by.jpg",
	"images/achievements-boy-desktop.png",
	"images/footer_hands-desktop.png",
	"images/header-logo-desktop.png",
	"images/header-menu_watch.png",
];

function LoadingImage() {
	this.urls = new Set();
	this.listImages = [];

	this.addItem = function (url) {
		this.urls.add(url);
	};

	this.getTotalItems = function () {
		return this.urls.size;
	};

	this.load = function (callbackProgress) {
		for (let url of this.urls) {
			const img = new Image();
			this.listImages.push(img);

			img.onload = callbackProgress;
			img.src = url;
		}
	};
}

function readyImges(callbackprogress, callbackReady) {
	const loader = new LoadingImage();

	urlImages.forEach((url) => {
		loader.addItem(url);
	});

	const totalImages = loader.getTotalItems();

	let count = 0;
	let progress = 0;

	loader.load(function () {
		count++;
		progress = (count / totalImages) * 100;

		if (typeof callbackprogress === "function") {
			callbackprogress(progress);
		}

		if (totalImages === count) {
			if (typeof callbackReady === "function") callbackReady();
		}
	});
}

export { readyImges };
