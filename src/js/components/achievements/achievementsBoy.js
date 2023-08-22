import { detectWidth } from "../../helpers/deviceCheck";

import throttle from "../../modules/throttle";

const fixedScrollBlock = () => {
	const $parent = document.querySelector(".achievements__container");
	const $fixedItem = $parent?.querySelector(".achievements__scene");
	const parentRect = $parent.getBoundingClientRect();
	const fixedItemRect = $fixedItem.getBoundingClientRect();

	$fixedItem.style.width = parentRect.width * 0.27 + "px";

	if (detectWidth(768)) {
		$fixedItem.classList.remove("_bottom");
		$fixedItem.classList.remove("is-fixed");
		$fixedItem.style.width = "";
		window.removeEventListener("scroll", fixedScrollBlock);
		return;
	}

	if (
		fixedItemRect.height != 0 &&
		parentRect.top <= 0 &&
		parentRect.bottom >= fixedItemRect.height
	) {
		$fixedItem.classList.remove("_bottom");
		$fixedItem.classList.add("is-fixed");
	} else {
		if (parentRect.bottom - 100 <= fixedItemRect.bottom) {
			$fixedItem.classList.add("_bottom");
			$fixedItem.classList.remove("is-fixed");
			// $fixedItem.style.width = "";
		} else {
			$fixedItem.classList.remove("_bottom");
			$fixedItem.classList.remove("is-fixed");
			// $fixedItem.style.width = "";
		}
	}

	// console.log(parentRect.bottom - 100 <= fixedItemRect.bottom);
};

const optimizedFixedScrollBlock = throttle(fixedScrollBlock, 100);

if (!detectWidth(768)) {
	window.addEventListener("scroll", optimizedFixedScrollBlock);
}
