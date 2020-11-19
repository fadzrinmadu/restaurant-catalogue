class MenuItem extends HTMLElement {
  set menu(menu) {
    this._menu = menu;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="menu__item">
        <span class="menu__name">${this._menu.name}</span>
        <span class="menu__price">$${Math.ceil(Math.random() * 5) * 10}</span>
        <span class="menu__description">Lorem Ipsum is simply dummy text of the printing.</span>
      </div>
    `;
  }
}

customElements.define('menu-item', MenuItem);
