import menuDivederPath from "./img/menu/divider.png";
import contactImgPath from "./img/contact/contact.png";
import footerIconPath from "./img/github-icon.png";

export function getContactPage() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";

    //Contact Header
    const contactContainer = document.createElement("div");
    contactContainer.className = "contact-container";

    const contactHeaderContainer = document.createElement("div");
    contactHeaderContainer.className = "contact-header-container";

    const dividerTop = document.createElement("img");
    dividerTop.className = "menu-divider";
    dividerTop.src = menuDivederPath;

    const contactHeaderText = document.createElement("h2");
    contactHeaderText.className = "contact-header-text";
    contactHeaderText.textContent = "Reservations"

    const contactSecondaryHeader = document.createElement("p");
    contactSecondaryHeader.textContent = "Light the fire"

    const dividerBottom = document.createElement("img");
    dividerBottom.className = "menu-divider";
    dividerBottom.src = menuDivederPath;

    contactHeaderContainer.appendChild(dividerTop);
    contactHeaderContainer.appendChild(contactHeaderText);
    contactHeaderContainer.appendChild(contactSecondaryHeader);
    contactHeaderContainer.appendChild(dividerBottom);

    contactContainer.appendChild(contactHeaderContainer);
    contentDiv.appendChild(contactContainer);
    
    //Contact Img
    const contactImg = document.createElement("img");
    contactImg.className = "contact-img";
    contactImg.src = contactImgPath;
    contactContainer.appendChild(contactImg);

    //Contact Info
    const contactInfoContainer = document.createElement("div");
    contactInfoContainer.className = "contact-info-container";

    const addressContainer = document.createElement("div");
    addressContainer.className = "address-container";
    const addressHeader = document.createElement("h3");
    addressHeader.textContent = "Address"
    const addressText = document.createElement("p");
    addressText.className = "contact-text";
    addressText.textContent = "The Flaming Oyster\n" +
        "Bukit Bintang, Jalan Raja Chulan\n" +
        "57000 Kuala Lumpur\n" +
        "Malaysia";
    addressContainer.appendChild(addressHeader);
    addressContainer.appendChild(addressText);

    const telContainer = document.createElement("div");
    telContainer.className = "tel-container";
    const telheader = document.createElement("h3");
    telheader.textContent = "Telephone";
    const telNumber = document.createElement("p");
    telNumber.className = "tel-num";
    telNumber.textContent = "+603 9053 6969";
    telContainer.appendChild(telheader);
    telContainer.appendChild(telNumber);

    const emailContainer = document.createElement("div");
    emailContainer.className = "email-container";
    const emailHeader = document.createElement("h3");
    emailHeader.textContent = "E-mail";
    const emailText = document.createElement("p");
    emailText.className = "email-text";
    emailText.textContent = "info@theflamingoyster.com";
    emailContainer.appendChild(emailHeader);
    emailContainer.appendChild(emailText);

    const contactButtonContainer = document.createElement("div");
    contactButtonContainer.className = "contact-button-container";
    const contactButton = document.createElement("button");
    contactButton.className = "contact-info-button";
    contactButton.type = "button";
    contactButton.textContent = "Satisfy her NOW";
    contactButtonContainer.appendChild(contactButton);

    // Footer
    const footer = document.createElement("footer");
    const pageCredit = document.createElement("div");
    pageCredit.className = "credit";
    pageCredit.textContent = "Created by";
    footer.appendChild(pageCredit);

    const creditLink = document.createElement("a");
    creditLink.href = "https://github.com/harithkhan";
    creditLink.textContent = "Harith Khan";
    const githubIcon = document.createElement("img");
    githubIcon.src = footerIconPath;
    pageCredit.appendChild(creditLink);
    pageCredit.appendChild(githubIcon);

    contentDiv.appendChild(footer);

    contactInfoContainer.appendChild(addressContainer);
    contactInfoContainer.appendChild(telContainer);
    contactInfoContainer.appendChild(emailContainer);
    contactInfoContainer.appendChild(contactButtonContainer);
    contactContainer.appendChild(contactInfoContainer);
};