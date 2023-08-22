import throttle from "../../modules/throttle";

const colorGradient = ["#D2233C", "#282A33"];

const scrollPosition = () => {
	const $scrollProgress = document.querySelector(".scroll-position");
	const $progressCounter = $scrollProgress.querySelector(
		".scroll-position__counter"
	);

	const scroll = window.pageYOffset || document.documentElement.scrollTop;
	const calcHeight =
		document.documentElement.scrollHeight -
		document.documentElement.clientHeight;
	const scrollValue = Math.round((scroll * 100) / calcHeight);

	if (window.document.documentMode) {
		$scrollProgress.style.background = `linear-gradient(${colorGradient[0]} ${scrollValue}%, ${colorGradient[1]} ${scrollValue}%)`;
	} else {
		$scrollProgress.style.background = `conic-gradient(${colorGradient[0]} ${scrollValue}%, ${colorGradient[1]} ${scrollValue}%)`;
	}
	$progressCounter.textContent = `${scrollValue}`;

	if (scrollValue >= 100) {
		$scrollProgress.classList.add("is-bottom");
	} else {
		if ($scrollProgress.closest(".is-bottom")) {
			$scrollProgress.classList.remove("is-bottom");
		}
	}
};

const optimizedScrollPosition = throttle(scrollPosition, 100);

window.addEventListener("scroll", optimizedScrollPosition);
