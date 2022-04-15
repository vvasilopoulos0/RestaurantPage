import home from './home';
import navbar from './navbar'
import contact from './contact';
import './style.css'

navbar();
home();

let contactBtn = document.getElementById('contact-btn');
contactBtn.addEventListener("click", contact());


