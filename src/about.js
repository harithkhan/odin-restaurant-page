import aboutRestaurantImgPath from "./img/about/about-restaurant.png";
import chefImgPath from "./img/about/chef.png";

export function getAboutPage() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";
    
    // Append about-restaurant and chef containers to an about-page container
    const aboutPageContainer = document.createElement("div");
    aboutPageContainer.className = "about-page-container";
    contentDiv.appendChild(aboutPageContainer);

    const aboutRestaurantContainer = document.createElement("div");
    aboutRestaurantContainer.className = "about-restaurant-container";
    const chefContainer = document.createElement("div");
    chefContainer.className = "chef-container";

    aboutPageContainer.appendChild(aboutRestaurantContainer);
    aboutPageContainer.appendChild(chefContainer);

    // About-restaurant container
    const restaurantImg = document.createElement("img");
    restaurantImg.className = "restaurant-img";
    restaurantImg.src = aboutRestaurantImgPath;

    const aboutTextContainer = document.createElement("div");
    aboutTextContainer.className = "about-text-container";

    aboutRestaurantContainer.appendChild(restaurantImg);
    aboutRestaurantContainer.appendChild(aboutTextContainer);

    // Chef container
    const chefTextContainer = document.createElement("div");
    chefTextContainer.className = "chef-text-container";

    const chefImg = document.createElement("img");
    chefImg.className = "chef-img";
    chefImg.src = chefImgPath;

    chefContainer.appendChild(chefTextContainer);
    chefContainer.appendChild(chefImg);
};