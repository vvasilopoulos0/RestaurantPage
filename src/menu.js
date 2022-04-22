import waffle from "./Assets/Pictures/waffles.jpg"
import frenchFries from "./Assets/Pictures/french-fries.jpg"
import pizza from "./Assets/Pictures/pizza.jpg"

export default function menu(){
    let menuContainer = document.createElement('div');
    let menu = document.createElement('div');
    let menuTitle = document.createElement('div');
    menuTitle.innerHTML = "MENU"

    menuContainer.classList.add('menu-container');
    menu.classList.add('menu');
    menuTitle.classList.add('menu-title');

    menu.appendChild(menuTitle);
    menuContainer.appendChild(menu);

    for(let i=0; i < 3; i++){
        let food = document.createElement('div');
        switch (i) {
            case 0:
                food.innerHTML = "Hell Pizza: 9,50$"; 
                let pizzaIcon = new Image(100,100);
                pizzaIcon.src = pizza;
                food.appendChild(pizzaIcon);      
                food.id = 'first-food';
                let line = document.createElement('hr');
                menu.appendChild(line);
                break;
            case 1:
                food.innerHTML = "Waffles: 8,60$";
                let waffleIcon = new Image(100,100);
                waffleIcon.src = waffle;
                //clicking on the icon takes us to the facebook page
                food.appendChild(waffleIcon);
                food.id = 'second-food';
                break;
            case 2:
                food.innerHTML = "French Fries: 7,00$";
                let friesIcon = new Image(100,100);
                friesIcon.src = frenchFries;
                //clicking on the icon takes us to the facebook page
                food.appendChild(friesIcon);
                food.id = 'third-food';
                break;
        }
        menu.appendChild(food);
    }

    
    

    document.body.appendChild(menuContainer);
}