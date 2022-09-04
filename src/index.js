import './style.css';
import DrinkData from './drinks-data.csv';
import MenuData from './menu-data.csv';

const appendMultiple = (parent, children) => {
    children.forEach(child => {
        parent.appendChild(child);
    });
};

const setAttributes = (newElement, attributeObject) => {
    for(const key in attributeObject) {
    newElement.setAttribute(key, attributeObject[key])
    };
};

const createElementClass = (newElement, ...args) => {
    const element = document.createElement(newElement);
    args.forEach(arg => {
        element.classList.add(arg);
    });
    return element;
};

const replaceFooter = () => {
    if (document.querySelector("footer")) document.querySelector("footer").remove();
    createFooter();
};

const initTabLinks = () => {
    const tabList = document.querySelectorAll("li>a");
    tabList.forEach(tabLink => {
        tabLink.addEventListener("click", (e) => {
            clearActiveTabs(tabList);
            if (e.target === tabList[0]) {
                createMenuPage();
            } else if (e.target === tabList[1]) {
                createHomepage();
            } else {
                createContactPage();
            };
            e.composedPath()[0].classList.add("active");
        });
    });
};

const clearActiveTabs = (tabList) => {
    tabList.forEach(tabLink => {
        if (tabLink.classList.contains("active")) {
            tabLink.classList.remove("active");
        };
    });
};

const createHeader = () => {
    const header = document.createElement("header");
    
    const headerLogo = document.createElement("h1");
    headerLogo.textContent = "Bellamy\'s";

    const headerTabContainer = createElementClass("div", "tab-links");
    const listHolder = document.createElement("ul");

    const tabOne = document.createElement("li");
    const menuLink = document.createElement("a");
    menuLink.textContent = "Menu";
    tabOne.appendChild(menuLink);

    const tabTwo = document.createElement("li");
    const homepageLink = createElementClass("a", "active");
    homepageLink.textContent = "Homepage";
    tabTwo.appendChild(homepageLink);

    const tabThree = document.createElement("li");
    const contactLink = document.createElement("a");
    contactLink.textContent = "Contact Us";
    tabThree.appendChild(contactLink);

    appendMultiple(listHolder, [tabOne, tabTwo, tabThree])

    headerTabContainer.appendChild(listHolder);

    appendMultiple(header, [headerLogo, headerTabContainer])

    document.body.appendChild(header);
    initTabLinks();
};

const createFooter = () => {
    const footer = document.createElement("Footer")

    const footerLink = document.createElement("a");
    footerLink.href = "https://github.com/MBright90/restaurant-homepage";

    footer.appendChild(footerLink);

    document.body.appendChild(footer);
};

const createHomepage = () => {

    const tabList = document.querySelectorAll("li>a")
    tabList.forEach(tabLink => {
        if (tabLink.classList.contains("active")) {
            tabLink.classList.remove("active");
        };
    });

    let mainToRemove = null;
    if (document.querySelector("main")) {
        mainToRemove = document.querySelector("main");
    };

    const mainContainer = document.createElement("main");
    mainContainer.style.flexDirection = "row";

    const homepageImage = createElementClass("div", "main-image")
    const informationContainer = createElementClass("div", "information");

    const paraOne = document.createElement("p");
    paraOne.textContent = "We believe food is humanity's most loyal friend. At Bellamy's, we strive to show that friend just how much we love them. We do this by taking the utmost care with our ingredients, endeavouring to treat each part of your meal, no matter how small, with affection. We source local, sustainable ingredients that our chefs have personally taste tested at source to bring you the highest quality meals possible.";
    const paraTwo = document.createElement("p");
    paraTwo.textContent = "So come on down to Bellamy's. Where the food, the staff and the atmosphere will be like visiting your oldest friends.";

    appendMultiple(informationContainer, [paraOne, paraTwo]);
    appendMultiple(mainContainer, [homepageImage, informationContainer])

    if (mainToRemove) {
        mainToRemove.remove();
    };

    document.body.appendChild(mainContainer);
    replaceFooter();
};

const createMenuPage = () => {

    const mainToRemove = document.querySelector("main");
    const mainContainer = document.createElement("main");
    mainContainer.style.flexDirection = "column";

    const introContainer = createElementClass("div", "menu-intro");
    const introSentence = document.createElement("p");
    introSentence.textContent = "Below is an example of a typical menu at Bellamy's. Due to the nature in which we source our ingredients, our menu is constantly evolving.";
    introContainer.appendChild(introSentence);

    // Create food menu grid
    const menuStack = createElementClass("div", "menu-stack");

    MenuData.forEach(menuItem => {
        const itemCard = createElementClass("div", "item-card");

        const itemImage = createElementClass("div", "item-image");
        itemImage.style.backgroundImage = `url('../src/${menuItem[0]}')`

        const itemTitle = createElementClass("div", "item-title");
        itemTitle.textContent = menuItem[1];

        const itemDetails = createElementClass("div", "item-details");
        itemDetails.textContent = menuItem[2];

        const itemPrice = createElementClass("div", "Item-price");
        itemPrice.textContent = menuItem[3];

        appendMultiple(itemCard, [itemImage, itemTitle, itemDetails, itemPrice])

        menuStack.appendChild(itemCard);
        }
    );

    // Create drinks menu
    const drinksContainer = createElementClass("div", "drinks-container");
    const drinksImage = createElementClass("div", "drinks-image");
    const drinksInformation = createElementClass("div", "drinks-information");
    const drinksHeader = document.createElement("h1");
    drinksHeader.textContent = "Drinks";

    drinksInformation.appendChild(drinksHeader);

    DrinkData.forEach(drinkItem => {
        const drinkCard = createElementClass("div", "drink-item");

        const drinkTitle = createElementClass("p", "drink-title");
        drinkTitle.textContent = drinkItem[0];

        const drinkDescription = document.createElement("p");
        drinkDescription.textContent = drinkItem[1];

        const drinkPrice = createElementClass("p", "drink-price");
        drinkPrice.textContent = drinkItem[2];

        appendMultiple(drinkCard, [drinkTitle, drinkDescription, drinkPrice]);
        drinksInformation.appendChild(drinkCard);
    });

    appendMultiple(drinksContainer, [drinksImage, drinksInformation]);
    appendMultiple(mainContainer, [introContainer, menuStack, drinksContainer]);

    mainToRemove.remove();
    document.body.appendChild(mainContainer);
    replaceFooter();
};

const createContactPage = () => {

    const mainToRemove = document.querySelector("main");
    const mainContainer = document.createElement("main");
    mainContainer.style.flexFlow = "row wrap";

    const formContainer = createElementClass("div", "form-container");
    const formHeader = document.createElement("h1");
    formHeader.textContent = "Contact Us";

    const form = document.createElement("form");
    form.setAttribute("method", "POST");

    //Name input
    const labelName = document.createElement("label");
    labelName.setAttribute("for", "name-input");
    labelName.textContent = "Name"
    const inputName = document.createElement("input")
    setAttributes(inputName, {
        "type": "text",
        "name": "name-input",
        "id": "name-input",
    });

    //Email input
    const labelEmail = document.createElement("label");
    labelEmail.setAttribute("for", "email-input")
    labelEmail.textContent = "Email"
    const inputEmail = document.createElement("input");
    setAttributes(inputEmail, {
        "type": "email",
        "name": "email-input",
        "id": "email-input",
    });

    //Message input
    const labelMessage = document.createElement("label");
    labelMessage.setAttribute("for", "message-input");
    labelMessage.textContent = "Message"
    const inputMessage = document.createElement("textarea");
    setAttributes(inputMessage, {
        "name": "message-input",
        "id": "message-input",
        "cols": 30,
        "rows": 20,
    });

    //Submit button
    const submitFormButton = document.createElement("button");
    submitFormButton.textContent = "Send";
    submitFormButton.setAttribute("type", "submit");

    appendMultiple(form, [labelName, 
                          inputName, 
                          labelEmail, 
                          inputEmail, 
                          labelMessage, 
                          inputMessage, 
                          submitFormButton]
    );

    appendMultiple(formContainer, [formHeader, form]);
    mainContainer.appendChild(formContainer)

    //Create map
    const mapSectionContainer = createElementClass("div", "map-container")
    const mapHeader = document.createElement("h1");
    mapHeader.textContent = "Find Us";

    const map = createElementClass("iframe", "map")
    map.setAttribute("src", "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ1UnKsCsFdkgR8CMUKuCjbF4&key=AIzaSyAUiJQbbR7baABDKDYiFTPF6dDsZChDTP8");

    const address = createElementClass("div", "address")
    
    const addressLineOne = document.createElement("p");
    addressLineOne.textContent = "18 Bruton Pl.";
    const addressLineTwo = document.createElement("p");
    addressLineTwo.textContent = "Mayfair";
    const addressLineThree = document.createElement("p");
    addressLineThree.textContent = "London";
    const addressLineFour = document.createElement("p");
    addressLineFour.textContent = "W1J 6LY";

    appendMultiple(address, [addressLineOne, addressLineTwo, addressLineThree, addressLineFour]);
    appendMultiple(mapSectionContainer, [mapHeader, map, address]);
    mainContainer.appendChild(mapSectionContainer);

    mainToRemove.remove();
    document.body.appendChild(mainContainer);
    replaceFooter();
};

//Initialize homepage

createHeader();
createHomepage();