import './style.css'
import GitIcon from './GitHub-Mark-Light-64px.png'
import HomeImage from './main-food-photo.jpeg'  

console.log('Do not worry, this is working')

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
};

const createFooter = () => {
    const footer = document.createElement('Footer')
}

const createHomepage = () => {
    const mainContainer = document.createElement("main")
}