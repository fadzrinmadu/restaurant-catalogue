import './menu-item';

class MenuList extends HTMLElement {
  set menus(menus) {
    this._menus = menus;
    this.render();
  }

  render() {
    this._menus.forEach((menu) => {
      const menuItemElement = document.createElement('menu-item');
      menuItemElement.menu = menu;
      this.appendChild(menuItemElement);
    });
  }
}

customElements.define('menu-list', MenuList);
