import menuDivederPath from "./img/menu/divider.png";
export function getMenuPage() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";
    
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
};
