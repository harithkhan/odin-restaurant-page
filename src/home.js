import heroTransparent from "./img/home/hero-transparent.png";
import kickerIconPath from "./img/home/stars-6.png";
import jamesPath from "./img/home/asian-man.jpg";
import stellaPath from "./img/home/asian-1.jpg";
import dixonPath from "./img/home/white-man.jpg";
import mingPath from "./img/home/asian-2.jpg";
import footerIconPath from "./img/github-icon.png";

export function getHomePage() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";

    // Append heroContainer's children
    const heroContainer = document.createElement("div");
    heroContainer.className = "hero-container";

    const copyContainer = document.createElement("div");
    copyContainer.className = "copy-container";

    const heroBg = document.createElement("img");
    heroBg.src = heroTransparent;
    heroBg.setAttribute("class", "hero-bg");
    heroBg.setAttribute("alt", "picture of very attractive Chinese woman");

    const heroImgCredit = document.createElement("div");
    heroImgCredit.className = "hero-img-credit";

    heroContainer.appendChild(copyContainer);
    heroContainer.appendChild(heroBg);
    heroContainer.appendChild(heroImgCredit);

    // Append copyContainer's children
    const kickerContainer = document.createElement("div");
    kickerContainer.className = "kicker-container";

    const mainCopy = document.createElement("h2");
    mainCopy.className = "main-copy";
    mainCopy.textContent = "Satisfy Her";

    const secondaryCopy = document.createElement("h3");
    secondaryCopy.className = "secondary-copy";
    secondaryCopy.textContent = "The date-night she deserves. Give her an unforgettable night with instagrammable food and ambiance, and service befitting her rightful status as queen. Her pleasure will be yours.";

    const ctaButton = document.createElement("button");
    ctaButton.setAttribute("type", "button");
    ctaButton.className = "cta-button";
    ctaButton.textContent = "Satisfy her NOW";

    copyContainer.appendChild(kickerContainer);
    copyContainer.appendChild(mainCopy);
    copyContainer.appendChild(secondaryCopy);
    copyContainer.appendChild(ctaButton);

    // Append kickerContainer's children
    const kickerIcon = document.createElement("img");
    kickerIcon.src = kickerIconPath;
    kickerIcon.className = "kicker-icon";
    kickerIcon.setAttribute("alt", "Icon showcasing 5 stars");

    const kickerText = document.createElement("p");
    kickerText.className = "kicker-text";
    kickerText.textContent = "4.9 stars on Google!";

    kickerContainer.appendChild(kickerIcon);
    kickerContainer.appendChild(kickerText);

    // Append heroImgCredit's children
    const textImageBy = document.createTextNode("Image by ");

    const heroImgLink = document.createElement("a");
    heroImgLink.href = "https://pixabay.com/users/lequochuy36-12991396/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8303096";
    heroImgLink.textContent = "Huy Lê";

    const textFrom = document.createTextNode(" from ");

    const pixabay = document.createElement("a");
    pixabay.href = "https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8303096";
    pixabay.textContent = "Pixabay";

    heroImgCredit.appendChild(textImageBy);
    heroImgCredit.appendChild(heroImgLink);
    heroImgCredit.appendChild(textFrom);
    heroImgCredit.appendChild(pixabay);

    // Append reviewContainer's children
    const reviewContainer = document.createElement("div");
    reviewContainer.className = "review-container";

    const reviewHeader = document.createElement("div");
    reviewHeader.className = "review-header";
    reviewHeader.textContent = "Our Satisfied Customers";

    const customerOneContainer = document.createElement("div");
    customerOneContainer.className = "customer-container";

    const customerTwoContainer = document.createElement("div");
    customerTwoContainer.className = "customer-container";

    const customerThreeContainer = document.createElement("div");
    customerThreeContainer.className = "customer-container";

    const customerFourContainer = document.createElement("div");
    customerFourContainer.className = "customer-container";

    reviewContainer.appendChild(reviewHeader);
    reviewContainer.appendChild(customerOneContainer);
    reviewContainer.appendChild(customerTwoContainer);
    reviewContainer.appendChild(customerThreeContainer);
    reviewContainer.appendChild(customerFourContainer);

    // Append customerOneContainer's children
    const customerOneImg = document.createElement("img");
    customerOneImg.className = "customer-img";
    customerOneImg.src = jamesPath;

    const customerOneName = document.createElement("h3");
    customerOneName.className = "customer-name";
    customerOneName.textContent = "James";

    const customerOneReview = document.createElement("p");
    customerOneReview.className = "customer-review";
    customerOneReview.textContent = "To be honest I just come here for the food, but every date I bring here seems to want to see me again. I tried going other places but then I didn't get any callbacks. If they closed down I would be single forever. The Flaming Oyster for life!";

    customerOneContainer.appendChild(customerOneImg);
    customerOneContainer.appendChild(customerOneName);
    customerOneContainer.appendChild(customerOneReview);

    // Append customerOneCredit to customerOneName
    const customerOneCredit = document.createElement("div");
    customerOneCredit.className = "customer-img-credit";

    const textImageByOne = document.createTextNode("Image by ");

    const customerOneLink = document.createElement("a");
    customerOneLink.href = "https://pixabay.com/users/rikkis_room-28916574/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7351683";
    customerOneLink.textContent = "かんの りゅうじ";

    const textFromOne = document.createTextNode(" from ");

    const pixabayOne = document.createElement("a");
    pixabayOne.href = "https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8303096";
    pixabayOne.textContent = "Pixabay";

    customerOneCredit.appendChild(textImageByOne);
    customerOneCredit.appendChild(customerOneLink);
    customerOneCredit.appendChild(textFromOne);
    customerOneCredit.appendChild(pixabayOne);

    customerOneName.appendChild(customerOneCredit);

    // Append customerTwoContainer's children
    const customerTwoImg = document.createElement("img");
    customerTwoImg.className = "customer-img";
    customerTwoImg.src = stellaPath;

    const customerTwoName = document.createElement("h3");
    customerTwoName.className = "customer-name";
    customerTwoName.textContent = "Stella";

    const customerTwoReview = document.createElement("p");
    customerTwoReview.className = "customer-review";
    customerTwoReview.textContent = "I only come here with my girlfriends because if a guy took me here it would be trouble - something about this place is just so romantic that I would say yes to any guy. Good food, good service and a good time.";

    customerTwoContainer.appendChild(customerTwoImg);
    customerTwoContainer.appendChild(customerTwoName);
    customerTwoContainer.appendChild(customerTwoReview);

    // Append customerTwoCredit to customerTwoName
    const customerTwoCredit = document.createElement("div");
    customerTwoCredit.className = "customer-img-credit";

    const textImageByTwo = document.createTextNode("Image by ");

    const customerTwoLink = document.createElement("a");
    customerTwoLink.href = "https://pixabay.com/users/kemdauart-13166846/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5601950";
    customerTwoLink.textContent = "Kem Dau Art";

    const textFromTwo = document.createTextNode(" from ");

    const pixabayTwo = document.createElement("a");
    pixabayTwo.href = "https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8303096";
    pixabayTwo.textContent = "Pixabay";

    customerTwoCredit.appendChild(textImageByTwo);
    customerTwoCredit.appendChild(customerTwoLink);
    customerTwoCredit.appendChild(textFromTwo);
    customerTwoCredit.appendChild(pixabayTwo);

    customerTwoName.appendChild(customerTwoCredit);

    // Append customerThreeContainer's children
    const customerThreeImg = document.createElement("img");
    customerThreeImg.className = "customer-img";
    customerThreeImg.src = dixonPath;

    const customerThreeName = document.createElement("h3");
    customerThreeName.className = "customer-name";
    customerThreeName.textContent = "Dixon";

    const customerThreeReview = document.createElement("p");
    customerThreeReview.className = "customer-review";
    customerThreeReview.textContent = "I was just a normal guy seeing someone way out of my league. I brought her to The Flaming Oyster on our first date where we were treated like royals. She kept wanting to see me after that and now we're engaged! Coincidence? I think not! 10/10 would recommend.";

    customerThreeContainer.appendChild(customerThreeImg);
    customerThreeContainer.appendChild(customerThreeName);
    customerThreeContainer.appendChild(customerThreeReview);

    // Append customerThreeCredit to customerThreeName
    const customerThreeCredit = document.createElement("div");
    customerThreeCredit.className = "customer-img-credit";

    const textImageByThree = document.createTextNode("Image by ");

    const customerThreeLink = document.createElement("a");
    customerThreeLink.href = "https://pixabay.com/users/u_4bga4jlsw8-29881635/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7450033";
    customerThreeLink.textContent = "u_4bga4jlsw8";

    const textFromThree = document.createTextNode(" from ");

    const pixabayThree = document.createElement("a");
    pixabayThree.href = "https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8303096";
    pixabayThree.textContent = "Pixabay";

    customerThreeCredit.appendChild(textImageByThree);
    customerThreeCredit.appendChild(customerThreeLink);
    customerThreeCredit.appendChild(textFromThree);
    customerThreeCredit.appendChild(pixabayThree);

    customerThreeName.appendChild(customerThreeCredit);

    // Append customerFourContainer's children
    const customerFourImg = document.createElement("img");
    customerFourImg.className = "customer-img";
    customerFourImg.src = mingPath;

    const customerFourName = document.createElement("h3");
    customerFourName.className = "customer-name";
    customerFourName.textContent = "Ming";

    const customerFourReview = document.createElement("p");
    customerFourReview.className = "customer-review";
    customerFourReview.textContent = "I am marrying the guy on top. I thought he might be weird at first, but The Flaming Oyster helped me relax and then I was able to see the gem that was in front of me. I got some good photos out of it too!";

    customerFourContainer.appendChild(customerFourImg);
    customerFourContainer.appendChild(customerFourName);
    customerFourContainer.appendChild(customerFourReview);

    // Append customerFourCredit to customerFourName
    const customerFourCredit = document.createElement("div");
    customerFourCredit.className = "customer-img-credit";

    const textImageByFour = document.createTextNode("Image by ");

    const customerFourLink = document.createElement("a");
    customerFourLink.href = "https://pixabay.com/users/duy1111-20857330/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=6126488";
    customerFourLink.textContent = "Duy Duy";

    const textFromFour = document.createTextNode(" from ");

    const pixabayFour = document.createElement("a");
    pixabayFour.href = "https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8303096";
    pixabayFour.textContent = "Pixabay";

    customerFourCredit.appendChild(textImageByFour);
    customerFourCredit.appendChild(customerFourLink);
    customerFourCredit.appendChild(textFromFour);
    customerFourCredit.appendChild(pixabayFour);

    customerFourName.appendChild(customerFourCredit);

    // Append footer's children
    const footer = document.createElement("footer");
    const pageCredit = document.createElement("div");
    pageCredit.className = "credit";
    pageCredit.textContent = "Created by";
    footer.appendChild(pageCredit);

    // Append pageCredit's children
    const creditLink = document.createElement("a");
    creditLink.href = "https://github.com/harithkhan";
    creditLink.textContent = "Harith Khan";
    const githubIcon = document.createElement("img");
    githubIcon.src = footerIconPath;
    pageCredit.appendChild(creditLink);
    pageCredit.appendChild(githubIcon);

    // Append elements to contentDiv
    contentDiv.appendChild(heroContainer);
    contentDiv.appendChild(reviewContainer);
    contentDiv.appendChild(footer);
};  