// Di drawer-inisiator.js
const BurgerInitiator = {
  init({ button, burger, content }) {
    button.addEventListener('click', (event) => {
      this._toggleBurger(event, burger);
      this._toggleHamburger(button);
    });

    content.addEventListener('click', (event) => {
      this._closeBurger(event, burger);
      this._toggleHamburger(button);
    });
  },

  _toggleBurger(event, burger) {
    event.stopPropagation();
    burger.classList.toggle('open');
  },

  _closeBurger(event, burger) {
    event.stopPropagation();
    burger.classList.remove('open');
  },

  _toggleHamburger(button) {
    button.classList.toggle('change');
  },
};

export default BurgerInitiator;
