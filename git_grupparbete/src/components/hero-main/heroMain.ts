import heroIMG from './heromain.png'
import './heroMain.css';
export const createHeroMain = (app: HTMLElement | null) => {
    if (!app) return;
    
    const heroMain = document.createElement('div');
    const heroTextHolder = document.createElement('div');
    const heroIMGHolder = document.createElement('div');

    heroMain.className = 'hero-main';
    heroTextHolder.className = 'hero-text-holder';
    heroIMGHolder.className = 'hero-img-holder';
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const button = document.createElement('button');
    const heroMainIMG = document.createElement('img');

    h1.innerText = 'Welcome to our store';
    p.innerText = 'We have a wide selection of products for you to choose from. Take a look at our products and find something you like!';
    button.innerText = 'View products';
    heroMainIMG.src=heroIMG;
    heroMainIMG.alt='hero image';

    heroIMGHolder.appendChild(heroMainIMG);
    heroTextHolder.appendChild(h1);
    heroTextHolder.appendChild(p);
    heroTextHolder.appendChild(button);
    heroMain.appendChild(heroIMGHolder);
    heroMain.appendChild(heroTextHolder);
    app.appendChild(heroMain);
    };