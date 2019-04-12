import "./styles/**/*.scss";
import { sec } from "./second";

document.querySelector("h1 > a").textContent = sec(
  `ES6 z Net Ninja`
).toLocaleUpperCase();
