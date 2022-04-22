import navbar from "./navbar";
import restaurant from "./Assets/Pictures/restaurant.jpg"

export default function home(){
    let mainSite = document.createElement('div');
    let homeCard = document.createElement('div');
    let content = document.createElement('div');
    
    
    //background image
    let restIcon = new Image(300,300);
    restIcon.src = restaurant;
    console.log(restIcon)

    mainSite.appendChild(homeCard);
    mainSite.id = 'main-site';
    homeCard.appendChild(content);
    content.innerHTML = 'Welcome to our restaurant : Happy Meal! Here you will enjoy the finest flavours from around the world. Get ready for a delicious trip!'

    content.classList.add('content');
    homeCard.classList.add('home-card');
    mainSite.classList.add('main-site')

    document.body.appendChild(mainSite);
    document.body.style.backgroundImage = "url('"+restIcon.src+"')"

}


