import aboutRestaurantImgPath from "./img/about/about-restaurant.png";
import chefImgPath from "./img/about/chef.png";
import aboutDividerPath from "./img/about/divider.png";
import footerIconPath from "./img/github-icon.png";

export function getAboutPage() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";
    
    //Append about-restaurant and chef containers to an about-page container
    const aboutPageContainer = document.createElement("div");
    aboutPageContainer.className = "about-page-container";
    contentDiv.appendChild(aboutPageContainer);

    const aboutRestaurantContainer = document.createElement("div");
    aboutRestaurantContainer.className = "about-restaurant-container";
    const chefContainer = document.createElement("div");
    chefContainer.className = "chef-container";

    aboutPageContainer.appendChild(aboutRestaurantContainer);
    aboutPageContainer.appendChild(chefContainer);

    //About-restaurant container
    const restaurantImg = document.createElement("img");
    restaurantImg.className = "restaurant-img";
    restaurantImg.src = aboutRestaurantImgPath;

    const aboutTextContainer = document.createElement("div");
    aboutTextContainer.className = "about-text-container";

    aboutRestaurantContainer.appendChild(restaurantImg);
    aboutRestaurantContainer.appendChild(aboutTextContainer);

    //About-restaurant content header
    const aboutTextHeaderContainer = document.createElement("div");
    aboutTextHeaderContainer.className = "about-text-header-container";

    const dividerTop = document.createElement("img");
    dividerTop.className = "divider-about";
    dividerTop.src = aboutDividerPath;

    const aboutTextHeader = document.createElement("h2");
    aboutTextHeader.className = "about-text-header";
    aboutTextHeader.textContent = "Perfect Date Night";

    const dividerMid = document.createElement("img");
    dividerMid.className = "divider-about";
    dividerMid.src = aboutDividerPath;

    aboutTextHeaderContainer.appendChild(dividerTop);
    aboutTextHeaderContainer.appendChild(aboutTextHeader);
    aboutTextHeaderContainer.appendChild(dividerMid);
    aboutTextContainer.appendChild(aboutTextHeaderContainer);

    // About Text
    const aboutText = document.createElement("p");
    aboutText.className = "about-text";
    aboutText.textContent = "Discover a date night like no other. At The Flaming Oyster, we craft an unforgettable dining experience that eliminates the guesswork of planning the perfect evening. Relax and let us handle every detail while you focus on what truly matters – her.\n\n" + 
    "Our menu is a feast for the senses, featuring dishes that are not only visually stunning but infused with aphrodisiac ingredients to set the mood. Paired with soft lighting, a romantic color palette, and the soothing sounds of jazz, passion will fill the air.\n\n" + 
    "Every moment at The Flaming Oyster is designed to inspire connection and romance. From the warm welcome at the door to the attentive service throughout your meal, we strive to make your evening magical.";

    aboutTextContainer.appendChild(aboutText);

    //Chef Container
    const chefTextContainer = document.createElement("div");
    chefTextContainer.className = "chef-text-container";

    const chefImg = document.createElement("img");
    chefImg.className = "chef-img";
    chefImg.src = chefImgPath;

    chefContainer.appendChild(chefTextContainer);
    chefContainer.appendChild(chefImg);

    //Chef Header Container
    const chefHeaderContainer = document.createElement("div");
    chefHeaderContainer.className = "about-text-header-container";

    const dividerTopChef = document.createElement("img");
    dividerTopChef.className = "divider-about";
    dividerTopChef.src = aboutDividerPath;

    const chefHeader = document.createElement("h2");
    chefHeader.className = "about-text-header";
    chefHeader.textContent = "Chemistry Chef";

    const dividerMidChef = document.createElement("img");
    dividerMidChef.className = "divider-about";
    dividerMidChef.src = aboutDividerPath;

    chefHeaderContainer.appendChild(dividerTopChef);
    chefHeaderContainer.appendChild(chefHeader);
    chefHeaderContainer.appendChild(dividerMidChef);
    chefTextContainer.appendChild(chefHeaderContainer);

    //Chef Text
    const chefText = document.createElement("p");
    chefText.className = "about-text";
    chefText.textContent = `Chef Harith Khan earned a PhD in Biochemistry from MIT, with a groundbreaking thesis titled "Aphrodisiac Foods and Their Potential to Improve Birthrates." His research has influenced global culinary trends and revitalized communities through the science of love on a plate.\n\n` +
    "Inspired by his own love story, Chef Khan used his expertise to craft aphrodisiac meals for his then-girlfriend Taylor. The result? A whirlwind romance that led to a happy marriage, sealed by their shared passion for food and connection.\n\n" +
    "Driven by his passion, Chef Khan perfected his craft at Le Cordon Bleu, earning the prestigious Grand Diplôme. Now, he brings the magic of his own love story to every couple dining at The Flaming Oyster.";

    chefTextContainer.appendChild(chefText)

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
};