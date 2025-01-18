import "./style.css";
import { getHomePage } from "./home.js";
import { getMenuPage } from "./menu.js";

document.addEventListener("DOMContentLoaded", getHomePage);

const homeButton = document.querySelector(".home-button");
const menuButton = document.querySelector(".menu-button");

homeButton.addEventListener("click", getHomePage);
menuButton.addEventListener("click", getMenuPage);