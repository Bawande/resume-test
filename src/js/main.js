import "./vendor";
import "./helpers";
import "./components/social";
import "./components/preloader/index";
import "./components/achievements/index";
import "./components/header/index";
import "./components/scrollPosition/index";

import { ieFix } from "./vendor/ie-fix";
import { vhFix } from "./vendor/vh-fix";
import { actualYear } from "./modules/actualYear";

import header from "./components/header";
import lazyLoading from "./modules/lazyLoading";
import scrollToAnchor from "./modules/scrollToAnchor";
import backToTop from "./modules/backToTop";

ieFix();
vhFix();
actualYear();
scrollToAnchor.init();
backToTop.init();

header.init();

lazyLoading.init();
