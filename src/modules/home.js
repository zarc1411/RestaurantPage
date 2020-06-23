const Home = (() => {

    const contentDiv = document.getElementById("content");
    const navbarDiv = document.createElement("div");

    const createNavBar = () => {
        navbarDiv.setAttribute("id", "navbar");
        contentDiv.appendChild(navbarDiv);
    }

    const createLogo = () => {
        const logoSpan = document.createElement("span");
        logoSpan.innerText = "YOURHOME";
        logoSpan.setAttribute("id" , "logo");
        navbarDiv.appendChild(logoSpan);
    }

    const createHomeButton = () => {
        const homeButton = document.createElement("button");
        homeButton.setAttribute("id", "homeButton");
        homeButton.innerText = "Home";
        navbarDiv.appendChild(homeButton);
    }

    const createMenuButton = () => {
        const menuButton = document.createElement("button");
        menuButton.setAttribute("id", "menuButton");
        menuButton.innerText = "Menu";
        navbarDiv.appendChild(menuButton);
    }

    const createAboutButton = () => {
        const aboutButton = document.createElement("button");
        aboutButton.setAttribute("id", "aboutButton");
        aboutButton.innerText = "About";
        navbarDiv.appendChild(aboutButton);
    }

    const createContactButton = () => {
        const contactButton = document.createElement("button");
        contactButton.setAttribute("id", "contactButton");
        contactButton.innerText = "Contact";
        navbarDiv.appendChild(contactButton);
    }

    const createCenterText = () => {
        const centerTextDiv = document.createElement("div");
        centerTextDiv.setAttribute("id" , "centerText");
        const text = document.createElement("span");
        text.innerText = "We will, make you feel at home.";
        contentDiv.appendChild(centerTextDiv);
        centerTextDiv.appendChild(text);
    }

    
    const loadNavigationBar = () => {
        createNavBar();
        createLogo();
        createHomeButton();
        createMenuButton();
        createAboutButton();
        createContactButton();
    }

    return { loadNavigationBar , createCenterText};
})();

export default Home;