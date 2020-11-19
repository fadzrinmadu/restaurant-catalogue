class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer class="footer">
        <div class="container">
          <div class="footer__header">
            <a class="brand-icon" href="#">
              <img src="logo.svg" width="140" height="42" alt="findresto logo">
            </a>
          </div>
          <div class="grid footer__grid">
            <div class="grid__item footer__about">
              <h4 class="footer__heading">About Us</h4>
              <p>Lorem ipsum dolor sit amet. Aenean commodo ligula eget dolor. Aenean massa. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel</p>
            </div>
            <div class="grid__item footer__contact">
              <h4 class="footer__heading">Contact Information</h4>
              <ul>
                <li>
                  <i class="fas fa-map-marker-alt"></i>
                  <span>198 West 21th Street, Suite 721 New York NY 10016</span>
                </li>
                <li>
                  <i class="fas fa-envelope"></i>
                  <span>findresto@email.com</span>
                </li>
                <li>
                  <i class="fas fa-phone-alt"></i>
                  <span>+ 1235 2355 98</span>
                </li>
              </ul>
            </div>
            <div class="grid__item footer__nav">
              <h4 class="footer__heading">Useful Links</h4>
              <ul>
                <li><a href="#">Support Center</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">FAQS</a></li>
              </ul>
            </div>
            <div class="grid__item footer__newslatter">
              <h4 class="footer__heading">Newslatter</h4>
              <form class="form">
                <div class="form__group">
                  <input class="form__input" type="email" placeholder="Email" aria-label="Email">
                </div>
                <button class="btn btn--dark form__btn" type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('app-footer', AppFooter);
