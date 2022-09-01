import './style.css';
import DrinkData from './drinks-data.csv';
import MenuData from './menu-data.csv';

// // Importing images //
// import GitIcon from './GitHub-Mark-Light-64px.png'
// import HomeImage from './main-food-photo.jpeg'
// import duckLegImage from '/duck-leg.jpg'

console.log(DrinkData[1])
console.log(MenuData)

const createHeader = () => {
    const header = document.createElement("header");
    
    const headerLogo = document.createElement("h1");
    headerLogo.textContent = "Bellamy\'s";

    const headerTabContainer = document.createElement("div");
    headerTabContainer.classList.add("tab-links");

    const listHolder = document.createElement("ul");

    const tabOne = document.createElement("li");
    const menuLink = document.createElement("a");
    menuLink.textContent = "Menu";
    tabOne.appendChild(menuLink);

    const tabTwo = document.createElement("li");
    const homepageLink = document.createElement("a");
    homepageLink.classList.add("active");
    homepageLink.textContent = "Homepage";
    tabTwo.appendChild(homepageLink);

    const tabThree = document.createElement("li");
    const contactLink = document.createElement("a");
    contactLink.textContent = "Contact Us";
    tabThree.appendChild(contactLink);

    listHolder.appendChild(tabOne);
    listHolder.appendChild(tabTwo);
    listHolder.appendChild(tabThree);

    headerTabContainer.appendChild(listHolder);

    header.appendChild(headerLogo);
    header.appendChild(headerTabContainer);

    document.body.appendChild(header);
};

const createFooter = () => {
    const footer = document.createElement("Footer")

    const footerLink = document.createElement("a");
    footerLink.href = "https://github.com/MBright90/restaurant-homepage";

    footer.appendChild(footerLink);

    document.body.appendChild(footer);
};

const createHomepage = () => {
    const mainToRemove = document.querySelector("main");
    const mainContainer = document.createElement("main");

    const homepageImage = document.createElement("div");
    homepageImage.classList.add("main-image");

    const informationContainer = document.createElement("div");

    const paraOne = document.createElement("p");
    paraOne.textContent = "We believe food is humanity's most loyal friend. At Bellamy's, we strive to show that friend just how much we love them. We do this by taking the utmost care with our ingredients, endeavouring to treat each part of your meal, no matter how small, with affection. We source local, sustainable ingredients that our chefs have personally taste tested at source to bring you the highest quality meals possible.";
    const paraTwo = document.createElement("p");
    paraTwo.textContent = "So come on down to Bellamy's. Where the food, the staff and the atmosphere will be like visiting your oldest friends.";

    informationContainer.appendChild(paraOne);
    informationContainer.appendChild(paraTwo);

    mainContainer.appendChild(homepageImage);
    mainContainer.appendChild(informationContainer);

    mainToRemove.remove();
    document.body.appendChild(mainContainer);
};

const createMenuPage = () => {
    const mainToRemove = document.querySelector("main");
    const mainContainer = document.createElement("main");

    const introContainer = document.createElement("div");
    const introSentence = document.createElement("p");
    introSentence.textContent = "Below is an example of a typical menu at Bellamy's. Due to the nature in which we source our ingredients, our menu is constantly evolving.";
    introContainer.appendChild(introSentence);


    // Creating food menu grid
    const menuStack = document.createElement("div");
    menuStack.classList.add("menu-stack");

    MenuData.forEach(menuItem => {
        const itemCard = document.createElement("div");
        itemCard.classList.add("item-card");

        const itemImage = document.createElement("div");
        itemImage.classList.add("item-image");
        itemImage.style.backgroundImage = `url('./'${menuItem[0]})`

        const itemTitle = document.createElement("div");
        itemTitle.classList.add("item-title");
        itemTitle.textContent = menuItem[1];

        const itemDetails = document.createElement("div");
        itemDetails.classList.add("item-details");
        itemDetails.textContent = menuItem[2];

        const itemPrice = document.createElement("div");
        itemPrice.classList.add("item-price");
        itemPrice.textContent = menuItem[3];

        itemCard.appendChild(itemImage);
        itemCard.appendChild(itemTitle);
        itemCard.appendChild(itemDetails);
        itemCard.appendChild(itemPrice);

        menuStack.appendChild(itemCard);
        }
    );

    // creating drinks menu
    const drinksContainer = document.createElement("div");
    drinksContainer.classList.add("drinks-container");

    const drinksImage = document.createElement("div");
    drinksImage.classList.add("drinks-image");

    const drinksInformation = document.createElement("div");
    drinksInformation.classList.add("drinks-information");



};

const createContactPage = () => {
    const toDo = "to be created"
};