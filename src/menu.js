import menuDivederPath from "./img/menu/divider.png";
import foodImgOnePath from "./img/menu/oyster.png";
import foodImgTwoPath from "./img/menu/prawn.png";
export function getMenuPage() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";

    //Menu Header    
    const menuContainer = document.createElement("div");
    menuContainer.className = "menu-container";
    contentDiv.appendChild(menuContainer);

    const menuHeader = document.createElement("div");
    menuHeader.className = "menu-header";
    menuContainer.appendChild(menuHeader);

    const menuDivider = document.createElement("img");
    menuDivider.src = menuDivederPath;
    menuDivider.className = "menu-divider";
    menuHeader.appendChild(menuDivider);

    const menuKicker = document.createElement("p");
    menuKicker.className = "menu-kicker";
    menuKicker.textContent = "Aphrodisiac";
    menuHeader.appendChild(menuKicker);

    const menuHeaderText = document.createElement("h2");
    menuHeaderText.className = "menu-header-text";
    menuHeaderText.textContent = "FOOD MENU";
    menuHeader.appendChild(menuHeaderText);

    const menuRestaurantName = document.createElement("p");
    menuRestaurantName.className = "menu-restaurant-name";
    menuRestaurantName.textContent = "The Flaming Oyster";
    menuHeader.appendChild(menuRestaurantName);

    const menuBottomDivider = document.createElement("img");
    menuBottomDivider.src = menuDivederPath;
    menuBottomDivider.className = "menu-divider";
    menuHeader.appendChild(menuBottomDivider);

    //Menu food containers
    const foodContainerOne = document.createElement("div");
    const foodContainerTwo = document.createElement("div");
    const foodContainerThree = document.createElement("div");
    const foodContainerFour = document.createElement("div");
    const foodContainerFive = document.createElement("div");
    const foodContainerSix = document.createElement("div");

    foodContainerOne.className = "food-container";
    foodContainerTwo.className = "food-container";
    foodContainerThree.className = "food-container";
    foodContainerFour.className = "food-container";
    foodContainerFive.className = "food-container";
    foodContainerSix.className = "food-container";

    menuContainer.appendChild(foodContainerOne);
    menuContainer.appendChild(foodContainerTwo);
    menuContainer.appendChild(foodContainerThree);
    menuContainer.appendChild(foodContainerFour);
    menuContainer.appendChild(foodContainerFive);
    menuContainer.appendChild(foodContainerSix);

    //Menu Container One
    const foodHeaderOne = document.createElement("h3");
    foodHeaderOne.className = "food-header";
    foodHeaderOne.textContent = "Oysters with apple & horseradish dressing";

    const foodPriceOne = document.createElement("p");
    foodPriceOne.className = "food-price";
    foodPriceOne.textContent = "RM69.69";

    const foodTextOne = document.createElement("p");
    foodTextOne.className = "food-text";
    foodTextOne.textContent = "Apple and horseradish dressing drizzled over oysters for a sophisticated seafood starter to share. Served on a bed of ice or rock salt with sprigs of dill."

    const foodImgOne = document.createElement("img");
    foodImgOne.src = foodImgOnePath;
    foodImgOne.className = "food-img";

    foodContainerOne.appendChild(foodHeaderOne);
    foodContainerOne.appendChild(foodPriceOne);
    foodContainerOne.appendChild(foodTextOne);
    foodContainerOne.appendChild(foodImgOne);

    //Menu Container Two
    const foodHeaderTwo = document.createElement("h3");
    foodHeaderTwo.className = "food-header";
    foodHeaderTwo.textContent = "Chilli prawn & broccoli stir-fry";

    const foodPriceTwo = document.createElement("p");
    foodPriceTwo.className = "food-price";
    foodPriceTwo.textContent = "RM48.99";

    const foodTextTwo = document.createElement("p");
    foodTextTwo.className = "food-text";
    foodTextTwo.textContent = "Stir-fry with ginger, sesame and chilli prawns to share. Low in fat but high in passion and taste.";

    const foodImgTwo = document.createElement("img");
    foodImgTwo.src = foodImgTwoPath;
    foodImgTwo.className = "food-img";

    foodContainerTwo.appendChild(foodHeaderTwo);
    foodContainerTwo.appendChild(foodPriceTwo);
    foodContainerTwo.appendChild(foodTextTwo);
    foodContainerTwo.appendChild(foodImgTwo);
};
