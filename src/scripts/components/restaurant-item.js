import CONFIG from '../globals/config';

class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="grid__item" data-id="${this._restaurant.id}">
        <div class="card">
          <div class="card__header">
            <img class="card__img lazyload" src="/images/placeholder.png" data-src="${this._restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" width="100%" height="224px" alt="${this._restaurant.name}" crossorigin="anonymous">
            <span>${this._restaurant.city}</span>
          </div>
          <div class="card__body">
            <h3 class="card__title">${this._restaurant.name}</h3>
            <div class="rating">
              <div class="rating__stars-outer">
                <div class="rating__stars-inner"></div>
              </div>
              <span>(${this._restaurant.rating})</span>
            </div>
            <p class="card__text paragraph">${this._restaurant.description.slice(0, 100)}...</p>
            <a class="btn btn--dark" href="${`/#/detail/${this._restaurant.id}`}">More details</a>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
