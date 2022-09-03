import './style.css';
import DrinkData from './drinks-data.csv';
import MenuData from './menu-data.csv';

console.log(DrinkData[1])
console.log(MenuData)

const appendMultiple = (parent, children) => {
    children.forEach(child => {
        parent.appendChild(child);
    });
};

const setAttributes = (newElement, attributeObject) => {
    for(const key in attributeObject) {
    newElement.setAttribute(key, attributeObject[key])
    }
};

const classElementCreate = (newElement, ...args) => {
    const element = document.createElement(newElement);
    args.forEach(arg => {
        element.classList.add(arg);
    })
    return element;
};

const replaceFooter = () => {

    let footerToRemove;
    if (footerToRemove = document.querySelector("footer")) footerToRemove.remove();
    createFooter();
}

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
        })
    })
}

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

    const headerTabContainer = classElementCreate("div", "tab-links");
    const listHolder = document.createElement("ul");

    const tabOne = document.createElement("li");
    const menuLink = document.createElement("a");
    menuLink.textContent = "Menu";
    tabOne.appendChild(menuLink);

    const tabTwo = document.createElement("li");
    const homepageLink = classElementCreate("a", "active");
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

    const homepageImage = classElementCreate("div", "main-image")
    const informationContainer = classElementCreate("div", "information");

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

    // const updateMenuPictures = () => {
    //     const menuPictures = document.querySelectorAll(".item-image");
    //     menuPictures.forEach(picture => {
    //         picture.style.backgroundImage = `url(./)`
    //     })
    // };

    const mainToRemove = document.querySelector("main");
    const mainContainer = document.createElement("main");
    mainContainer.style.flexDirection = "column";

    const introContainer = document.createElement("div");
    introContainer.classList.add("menu-intro")
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
        itemImage.style.backgroundImage = `url('../src/${menuItem[0]}')`

        const itemTitle = document.createElement("div");
        itemTitle.classList.add("item-title");
        itemTitle.textContent = menuItem[1];

        const itemDetails = document.createElement("div");
        itemDetails.classList.add("item-details");
        itemDetails.textContent = menuItem[2];

        const itemPrice = document.createElement("div");
        itemPrice.classList.add("item-price");
        itemPrice.textContent = menuItem[3];

        appendMultiple(itemCard, [itemImage, itemTitle, itemDetails, itemPrice])

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
    const drinksHeader = document.createElement("h1");
    drinksHeader.textContent = "Drinks";

    drinksInformation.appendChild(drinksHeader);

    DrinkData.forEach(drinkItem => {
        const drinkCard = document.createElement("div");
        drinkCard.classList.add("drink-item");

        const drinkTitle = document.createElement("p");
        drinkTitle.textContent = drinkItem[0];
        drinkTitle.classList.add("drink-title");

        const drinkDescription = document.createElement("p");
        drinkDescription.textContent = drinkItem[1];

        const drinkPrice = document.createElement("p");
        drinkPrice.textContent = drinkItem[2];
        drinkPrice.classList.add("drink-price");

        appendMultiple(drinkCard, [drinkTitle, drinkDescription, drinkPrice]);
        drinksInformation.appendChild(drinkCard);
    })

    appendMultiple(drinksContainer, [drinksImage, drinksInformation]);
    appendMultiple(mainContainer, [introContainer, menuStack, drinksContainer]);

    mainToRemove.remove();
    document.body.appendChild(mainContainer);
    replaceFooter();
};

const createContactPage = () => {

    const mainToRemove = document.querySelector("main");
    const mainContainer = document.createElement("main");
    mainContainer.style.flexDirection = "row";

    const formContainer = document.createElement("div");
    formContainer.classList.add("form-container");

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
    const mapSectionContainer = classElementCreate("div", "map-container")
    const mapHeader = document.createElement("h1");
    mapHeader.textContent = "Find Us";

    const map = classElementCreate("div", "map")

    const address = classElementCreate("div", "address")
    
    const addressLineOne = document.createElement("p");
    addressLineOne.textContent = "12 Hammer St.";
    const addressLineTwo = document.createElement("p");
    addressLineTwo.textContent = "Portsmouth";
    const addressLineThree = document.createElement("p");
    addressLineThree.textContent = "Love County";
    const addressLineFour = document.createElement("p");
    addressLineFour.textContent = "PM33 3RP";

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