import contactImgPath from "./img/contact/contact.png";
import footerIconPath from "./img/github-icon.png";

export function getContactPage() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";

    //Contact Header
    const contactContainer = document.createElement("div");
    contactContainer.className = "contact-container";

    contentDiv.appendChild(contactContainer);
    
    //Contact Img
    const contactImg = document.createElement("img");
    contactImg.className = "contact-img";
    contactImg.src = contactImgPath;
    contactContainer.appendChild(contactImg);
};