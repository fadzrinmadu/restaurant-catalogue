import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button, drawer, content, navList,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._navList = navList;

    this._initialAppShell();
    this._setActiveNavLink();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  _setActiveNavLink() {
    const navLinks = this._navList.querySelectorAll('.nav__link');
    this._navList.addEventListener('click', (event) => {
      if (event.target.className === 'nav__link') {
        navLinks.forEach((navLink) => {
          navLink.className = 'nav__link';
        });
        event.target.classList.add('active');
      }
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();

    await page.afterRender();
  }
}

export default App;
