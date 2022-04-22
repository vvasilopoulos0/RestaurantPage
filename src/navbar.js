import contact from "./contact";

export default function navbar(){

    let nav = document.createElement('div');
    let title = document.createElement('div');
    let btnContainer = document.createElement('div');

    title.classList.add('site-title');
    title.innerHTML = 'HAPPY MEAL'
    btnContainer.classList.add('btn-container');
    nav.classList.add('navbar');

    nav.appendChild(title);
    nav.appendChild(btnContainer);

    for(let i=0; i < 3; i++){
        let btn = document.createElement('button');
        switch (i) {
            case 0:
                btn.innerHTML = "Home";
                btn.id = 'home-btn';
                break;
            case 1:
                btn.innerHTML = "Menu";
                btn.id = 'menu-btn';
                break;
            case 2:
                btn.innerHTML = "Contact";
                btn.id = 'contact-btn';
                break;
        }
        btnContainer.appendChild(btn);
    }
    document.body.appendChild(nav)
}