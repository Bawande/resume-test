import { detectWidth } from "../../helpers/deviceCheck";

import throttle from "../../modules/throttle";

const state = { height: null };

const fixedMenu = () => {
	const $parent = document.querySelector(".header__menu-wrap");
	const $body = document.body;
	const parentRect = $parent.getBoundingClientRect();
	const scroll = window.pageYOffset || document.documentElement.scrollTop;
	const parentHeight = parentRect.height;

	if (state.height === null) {
		state.height = parentHeight;
	}

	if (parentRect.height <= scroll) {
		if (state.height && state.height < parentHeight) {
			state.height = parentHeight;
		}

		$body.style.paddingTop = state.height + "px";
		$parent.classList.add("is-fixed");
		$parent.style.width = parentRect.width + "px";
	} else {
		$parent.classList.remove("is-fixed");
		$parent.style.width = "";
		$body.style.paddingTop = "";
	}
};

const optimizedFixedMenu = throttle(fixedMenu, 100);

window.addEventListener("scroll", optimizedFixedMenu);

const handlerOnResize = (event) => {
	const $parent = document.querySelector(".header__menu-wrap");

	if ($parent.closest(".is-fixed")) {
		$parent.classList.remove("is-fixed");
		$parent.style.width = "";
	}
};

const optimizedHandlerOnResize = throttle(handlerOnResize, 100);

window.addEventListener("resize", optimizedHandlerOnResize);
