/* eslint-disable arrow-parens */
/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */
/* eslint-disable quotes */
import 'regenerator-runtime';
import '../styles/main.css';
import './component/jumbotron-resto.js';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#buttonBurger'),
  burger: document.querySelector('#sideDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  addNavigationCloseListeners();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

function addNavigationCloseListeners() {
  const navLinks = document.querySelectorAll('#sideDrawer ul li a');
  const burger = document.querySelector('#sideDrawer');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
    });
  });
}

class FootersElement extends HTMLElement {
  constructor() {
    super();
    const footer = document.createElement("div");
    footer.setAttribute("class", "footer");
    footer.innerHTML = `
      Copyright &copy; 2024 - Rizki Nur'Allam
    `;
    this.appendChild(footer);
  }
}
customElements.define("footers-element", FootersElement);
