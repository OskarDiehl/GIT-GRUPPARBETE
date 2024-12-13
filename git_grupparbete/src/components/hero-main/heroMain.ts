
export const createHeroMain = (app: HTMLElement | null) => {
    if (!app) return;
    
    const heroMain = document.createElement('div');
    heroMain.className = 'hero-main';
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const button = document.createElement('button');
    h1.innerText = 'Welcome to our store';
    p.innerText = 'We have a wide selection of products for you to choose from. Take a look at our products and find something you like!';
    button.innerText = 'View products';
    
    heroMain.appendChild(h1);
    heroMain.appendChild(p);
    heroMain.appendChild(button);
    app.appendChild(heroMain);
    }; 