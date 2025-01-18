import "./style.css";
import { getHomePage } from "./home.js";
import { getMenuPage } from "./menu.js";
import { getAboutPage } from "./about.js";
import { getContactPage } from "./contact.js";

document.addEventListener("DOMContentLoaded", getHomePage);

const homeButton = document.querySelector(".home-button");
const menuButton = document.querySelector(".menu-button");
const aboutButton = document.querySelector(".about-button");
const contactButton = document.querySelector(".contact-button");

homeButton.addEventListener("click", getHomePage);
menuButton.addEventListener("click", getMenuPage);
aboutButton.addEventListener("click", getAboutPage);
contactButton.addEventListener("click", getContactPage);