class AppCopyRight extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="copyright">
        <div class="container">
          <small>All Right Reserved. Copyright @ 2020 - FindResto</small>
        </div>
      </div>
    `;
  }
}

customElements.define('app-copyright', AppCopyRight);
