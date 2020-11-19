import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.scss';
import './components/app-header';
import './components/app-footer';
import './components/app-copyright';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerMenu'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
  navList: document.querySelector('.header .nav__list'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
  window.scrollTo(0, 0);
});

window.addEventListener('DOMContentLoaded', () => {
  app.renderPage();
  swRegister();
});

window.addEventListener('scroll', () => {
  const windowPosition = window.scrollY > 0;
  document.querySelector('.header').classList.toggle('active', windowPosition);
});
