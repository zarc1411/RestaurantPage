const About = (function () {
    const contentDiv = document.getElementById("content");

    const createAbout = () => {
        const aboutDiv = document.createElement("div");
        aboutDiv.setAttribute("id" , "aboutTextDiv");
        const text = document.createElement("span");
        text.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        aboutDiv.appendChild(text);
        contentDiv.appendChild(aboutDiv);
    }

    return {createAbout};
})();

export default About;