const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.preventDefault();
    event.stopPropagation();
    drawer.classList.toggle('menu-open');
  },

  _closeDrawer(event, drawer) {
    drawer.classList.remove('menu-open');
  },
};

export default DrawerInitiator;
