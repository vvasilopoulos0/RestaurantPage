import facebookIcon from "./Assets/Pictures/facebook.png"
import instagramIcon from "./Assets/Pictures/instagram.png"

export default function contact(){
    let contactContainer = document.createElement('div');
    let contacts = document.createElement('div');
    let contactTitle = document.createElement('div');
    contactTitle.innerHTML = "Contact us"

    contactContainer.classList.add('contact-container');
    contacts.classList.add('contacts');
    contactTitle.classList.add('contact-title');

    contacts.appendChild(contactTitle);
    contactContainer.appendChild(contacts);

    for(let i=0; i < 3; i++){
        let contact = document.createElement('div');
        switch (i) {
            case 0:
                contact.innerHTML = "Via telephone"; 
                let phoneNumber = document.createElement('div')
                phoneNumber.innerHTML = "+306999998599";
                contact.appendChild(phoneNumber);      
                contact.id = 'first-contact';
                break;
            case 1:
                contact.innerHTML = "Via Facebook";
                let fbIcon = new Image(50,50);
                fbIcon.src = facebookIcon;
                //clicking on the icon takes us to the facebook page
                fbIcon.addEventListener("click", function(){
                    location.href = 'www.facebook.com'
                })
                contact.appendChild(fbIcon);
                contact.id = 'second-contact';
                break;
            case 2:
                contact.innerHTML = "Via Instagram";
                let instaIcon = new Image(50,50);
                instaIcon.src = instagramIcon;
                //clicking on the icon takes us to the instagram page
                instaIcon.addEventListener("click", function(){
                    location.href = 'www.instagram.com'
                },false)
                contact.appendChild(instaIcon);
                contact.id = 'third-contact';
                break;
        }
        contacts.appendChild(contact);
    }

    
    

    document.body.appendChild(contactContainer);
}

