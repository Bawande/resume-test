import { detectWidth } from "../../helpers/deviceCheck";

import throttle from "../../modules/throttle";

const $parentLinks = document.querySelector(".header-topnav__list");
const $links = $parentLinks.querySelectorAll(".header-topnav__link");

const linksActiveClassRemove = () => {
	[].forEach.call($links, ($link) => {
		$link.classList.remove("is-active");
	});
};

const searchActiveMenuItems = () => {
	const $sections = document.querySelectorAll("section");
	const offsetScroll = 80;

	if (detectWidth(768)) {
		window.removeEventListener("scroll", optimizedSearchActiveMenuItems);
		return;
	}

	linksActiveClassRemove();

	[].forEach.call($sections, ($section) => {
		const sectionRect = $section.getBoundingClientRect();

		if (
			sectionRect.top - offsetScroll <= 0 &&
			sectionRect.bottom - offsetScroll >= 0
		) {
			const sectionID = $section.getAttribute("id");

			[].forEach.call($links, ($link) => {
				const linkHref = $link.getAttribute("href").slice(1);

				if (linkHref === sectionID) {
					$link.classList.add("is-active");
				}
			});
		}
	});
};

const optimizedSearchActiveMenuItems = throttle(searchActiveMenuItems, 100);

if (!detectWidth(768)) {
	window.addEventListener("scroll", optimizedSearchActiveMenuItems);
}

const hendlerCkickMenuItem = (event) => {
	if (detectWidth(768)) {
		window.removeEventListener("click", hendlerCkickMenuItem);
		return;
	}

	if (event.target.closest(".header-topnav__link")) {
		window.removeEventListener("scroll", optimizedSearchActiveMenuItems);
		const $link = event.target;

		linksActiveClassRemove();

		$link.classList.add("is-active");

		setTimeout(() => {
			window.addEventListener("scroll", optimizedSearchActiveMenuItems);
		}, 5000);
	}
};

$parentLinks.addEventListener("click", hendlerCkickMenuItem);
