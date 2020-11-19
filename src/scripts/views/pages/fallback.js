const Fallback = {
  async render() {
    return `
      <div class="fallback-page">
        <h5>OOPS!</h5>
        <p>Currently you cannot view this page offline</p>
        <a class="btn btn--primary" href="/#home">Go to Homepage</a>
      </div>
    `;
  },
};

export default Fallback;
