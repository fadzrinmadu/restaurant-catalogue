class ReviewItem extends HTMLElement {
  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="card">
        <div class="card__body">
          <h3 class="card__title">${this._review.name}</h3>
          <p class="card__text">${this._review.review}</p>
          <time class="review__date">${this._review.date}</time>
        </div>
      </div>
    `;
  }
}

customElements.define('review-item', ReviewItem);
