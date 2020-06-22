import Home from './modules/home';
import Menu from './modules/menu';

const Restaurant = (function(){
    Home.loadNavigationBar();
    Menu.loadMenu();
    
    const deleteAllContentExceptNavBar = () => {
    
    }
    const homeButton = document.getElementById("homeButton");
    homeButton.addEventListener('click' , () => {
        
    });
})();


