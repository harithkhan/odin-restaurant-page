import menuDivederPath from "./img/menu/divider.png";
import foodImgOnePath from "./img/menu/oyster.png";
import foodImgTwoPath from "./img/menu/prawn.png";
import foodImgThreePath from "./img/menu/salad.png";
import foodImgFourPath from "./img/menu/pappardelle.png";
import foodImgFivePath from "./img/menu/tartine.png";
import foodImgSixPath from "./img/menu/chocolate.png";
import footerIconPath from "./img/github-icon.png";

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
    foodHeaderOne.textContent = "Oysters with Apple & Horseradish Dressing";

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
    foodHeaderTwo.textContent = "Chilli Prawn & Broccoli Stir-Fry";

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

    // Menu Container Three
    const foodHeaderThree = document.createElement("h3");
    foodHeaderThree.className = "food-header";
    foodHeaderThree.textContent = "Beetroot & Halloumi Salad";

    const foodPriceThree = document.createElement("p");
    foodPriceThree.className = "food-price";
    foodPriceThree.textContent = "RM38.99";

    const foodTextThree = document.createElement("p");
    foodTextThree.className = "food-text";
    foodTextThree.textContent = "Salad with three of your 5-a-day. Halloumi with juicy pomegranate seeds and the crunch of pumpkin seeds is a moreish combination. As usual, to share.";

    const foodImgThree = document.createElement("img");
    foodImgThree.src = foodImgThreePath;
    foodImgThree.className = "food-img";

    foodContainerThree.appendChild(foodHeaderThree);
    foodContainerThree.appendChild(foodPriceThree);
    foodContainerThree.appendChild(foodTextThree);
    foodContainerThree.appendChild(foodImgThree);

    //Menu Container Four
    const foodHeaderFour = document.createElement("h3");
    foodHeaderFour.className = "food-header";
    foodHeaderFour.textContent = "Crab & Asparagus Pappardelle";

    const foodPriceFour = document.createElement("p");
    foodPriceFour.className = "food-price";
    foodPriceFour.textContent = "RM69.69";

    const foodTextFour = document.createElement("p");
    foodTextFour.className = "food-text";
    foodTextFour.textContent = "Crab served with fresh egg pappardelle and rocket salad. Gloves provided so you two can get as dirty as you want. Crab breaking services not provided, you can do that for her, Mr. Macho man.";

    const foodImgFour = document.createElement("img");
    foodImgFour.src = foodImgFourPath;
    foodImgFour.className = "food-img";

    foodContainerFour.appendChild(foodHeaderFour);
    foodContainerFour.appendChild(foodPriceFour);
    foodContainerFour.appendChild(foodTextFour);
    foodContainerFour.appendChild(foodImgFour);

    //Menu Container Five
    const foodHeaderFive = document.createElement("h3");
    foodHeaderFive.className = "food-header";
    foodHeaderFive.textContent = "Fig, Burrata & Prosciutto Tartine";

    const foodPriceFive = document.createElement("p");
    foodPriceFive.className = "food-price";
    foodPriceFive.textContent = "RM57.99";

    const foodTextFive = document.createElement("p");
    foodTextFive.className = "food-text";
    foodTextFive.textContent = "Rustic sourdough tartines layered with creamy burrata, sweet figs, and savory prosciutto, delivering a perfect balance of flavors in every bite. An effortlessly elegant choice for date night.";

    const foodImgFive = document.createElement("img");
    foodImgFive.src = foodImgFivePath;
    foodImgFive.className = "food-img";

    foodContainerFive.appendChild(foodHeaderFive);
    foodContainerFive.appendChild(foodPriceFive);
    foodContainerFive.appendChild(foodTextFive);
    foodContainerFive.appendChild(foodImgFive);

    //Menu Container Six
    const foodHeaderSix = document.createElement("h3");
    foodHeaderSix.className = "food-header";
    foodHeaderSix.textContent = "Chocolate Ganache with Sea Salt & Toast";

    const foodPriceSix = document.createElement("p");
    foodPriceSix.className = "food-price";
    foodPriceSix.textContent = "RM38.99";

    const foodTextSix = document.createElement("p");
    foodTextSix.className = "food-text";
    foodTextSix.textContent = "Silky smooth chocolate ganache, with crisp ciabatta toasts and a sprinkle of sea salt makes for a chic and ultra-indulgent date night dessert.";

    const foodImgSix = document.createElement("img");
    foodImgSix.src = foodImgSixPath;
    foodImgSix.className = "food-img";

    foodContainerSix.appendChild(foodHeaderSix);
    foodContainerSix.appendChild(foodPriceSix);
    foodContainerSix.appendChild(foodTextSix);
    foodContainerSix.appendChild(foodImgSix);

    //Menu Misc Container 
    const menuMiscContainer = document.createElement("div");
    menuMiscContainer.className = "menu-misc-container";
    menuContainer.appendChild(menuMiscContainer);

    const menuDividerThree = document.createElement("img");
    menuDividerThree.src = menuDivederPath;
    menuDividerThree.className = "menu-divider-bottom";
    menuMiscContainer.appendChild(menuDividerThree);

    //Alcohol & Beverage Menu Containers
    const alcoholMenuContainer = document.createElement("div");
    alcoholMenuContainer.className = "alcohol-menu-container";
    const beverageMenuContainer = document.createElement("div");
    beverageMenuContainer.className = "beverage-menu-container";
    menuMiscContainer.appendChild(alcoholMenuContainer);
    menuMiscContainer.appendChild(beverageMenuContainer);

    //Alcohol Menu Contents
    const alcoholHeader = document.createElement("h3");
    alcoholHeader.className = "food-header";
    alcoholHeader.textContent = "Alcohol (min. spend RM300)";

    const alcoholText = document.createElement("p");
    alcoholText.className = "alcohol-text";
    alcoholText.textContent = "House Pour Red\n" +
        "House Pour White\n" + 
        "Château Margaux (France - Red Wine)\n" + 
        "Domaine de la Romanée-Conti (France - Pinot Noir)\n" + 
        "Opus One (Napa Valley, USA - Cabernet Sauvignon)\n" + 
        "Veuve Clicquot La Grande Dame (Champagne, France)";

    const alcoholPrices = document.createElement("p");
    alcoholPrices.className = "alcohol-prices";
    alcoholPrices.textContent = "RM182\nRM182\nRM203\nRM203\nRM399\nRM499"

    alcoholMenuContainer.appendChild(alcoholHeader);
    alcoholMenuContainer.appendChild(alcoholText);
    alcoholMenuContainer.appendChild(alcoholPrices);

    //Beverage Menu Contents
    const beverageHeader = document.createElement("h3");
    beverageHeader.className = "bev-header";
    beverageHeader.textContent = "Beverages";

    const beverageText = document.createElement("p");
    beverageText.className = "bev-text";
    beverageText.textContent = "Pellegrino\n" +
        "Espresso(Double)\n" +
        "Redbull\n" +
        "Monster\n" +
        "100 Plus\n" +
        "Revive\n";
    
    const beveragePrices = document.createElement("p");
    beveragePrices.className = "alcohol-prices";
    beveragePrices.textContent = "RM24\nRM24\nRM24\nRM24\nRM24\nRM24\n"

    beverageMenuContainer.appendChild(beverageHeader);
    beverageMenuContainer.appendChild(beverageText);
    beverageMenuContainer.appendChild(beveragePrices);

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
