import home from './home';
import navbar from './navbar'
import contact from './contact';
import menu from './menu';
import './style.css'



    let bodyList = document.body;
    navbar(); //opening screen contains navbar +
    home();   // the home divs
    let listLength = bodyList.children.length; // list length so we can always delete the last element

    let contactBtn = document.getElementById('contact-btn');
    contactBtn.addEventListener("click", function(){
        if (bodyList.hasChildNodes()){
            bodyList.removeChild(bodyList.children[listLength-1]); //deleting our previous menu category since we append a new one
        }
        contact();
    });
    
    let homeBtn = document.getElementById('home-btn');
    homeBtn.addEventListener("click", function(){
        if (bodyList.hasChildNodes()){
            bodyList.removeChild(bodyList.children[listLength-1])  //deleting our previous menu category since we append a new one
        }
        home();
    });
    
    let menuBtn = document.getElementById('menu-btn');
    menuBtn.addEventListener("click", function(){
        if (bodyList.hasChildNodes()){
            bodyList.removeChild(bodyList.children[listLength-1])  //deleting our previous menu category since we append a new one
        }
        menu();
    });




