class AppHeader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="#mainContent" class="skip-link">Skip to content</a>
      <header class="header">
        <div class="container">
          <nav class="nav" id="navigationDrawer">
            <a class="brand-icon" href="#">
              <h1><img src="logo.svg" width="140" height="42" alt="findresto logo"></h1>
            </a>
            <a class="hamburger-menu" id="hamburgerMenu" href="#" aria-label="toggle menu">
              <i class="fas fa-bars"></i>
              <i class="fas fa-times"></i>
            </a>
            <ul class="nav__list">
              <li class="nav__item">
                <a class="nav__link active" href="#">Home</a>
              </li>
              <li class="nav__item">
                <a class="nav__link" href="#/favorite">Favorite</a>
              </li>
              <li class="nav__item">
                <a class="nav__link" rel="noreferrer" href="https://github.com/fadzrinmadu" target="_blank">About Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    `;
  }
}

customElements.define('app-header', AppHeader);
