// FILE: navbar.ts
import './navbar.css';

export const createNavbar = (app: HTMLElement | null) => {
  if (!app) return;

  const navbar = document.createElement('div');
  navbar.className = 'navbar';
  const li1 = document.createElement('li');
  const a1 = document.createElement('a');
  const li2 = document.createElement('li');
  const a2 = document.createElement('a');
  const li3 = document.createElement('li');
  const a3 = document.createElement('a');
  const ul = document.createElement('ul');
  a1.href = '#';
  a1.innerText = 'Home';
  a2.href = '#';
  a2.innerText = 'Products';
  a3.href = '#';
  a3.innerText = 'Disabled';

  li1.appendChild(a1);
  ul.appendChild(li1);

  li2.appendChild(a2);
  ul.appendChild(li2);

  li3.appendChild(a3);
  ul.appendChild(li3);

  navbar.appendChild(ul);
  app.appendChild(navbar);
};