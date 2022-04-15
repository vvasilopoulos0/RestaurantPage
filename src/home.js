import navbar from "./navbar";
import waffles from "./waffles.jpg"

export default function home(){
    let mainSite = document.createElement('div');
    let homeCard = document.createElement('div');
    let content = document.createElement('div');
    let icon = new Image(200,200);
    icon.src = waffles;

    mainSite.appendChild(homeCard);
    homeCard.appendChild(content);
    homeCard.appendChild(icon);
    content.innerHTML = 'Welcome to our restaurant : Happy Meal! Here you will enjoy the finest flavours from around the world. Get ready for an amazing trip.'

    content.classList.add('content');
    homeCard.classList.add('home-card');
    mainSite.classList.add('main-site')

    document.body.appendChild(mainSite);

}


