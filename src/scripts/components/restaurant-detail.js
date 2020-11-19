import CONFIG from '../globals/config';
import StarInitiator from '../utils/star-initiator';

class RestaurantDetail extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();

    StarInitiator.init({
      starContainer: document.querySelector('.rating'),
      starTotal: 5,
      starRating: this._restaurant.rating,
    });
  }

  render() {
    let restaurantCategories = '';
    this._restaurant.categories.forEach((category) => {
      restaurantCategories += `<span>${category.name}</span>`;
    });

    this.innerHTML = `
      <div class="grid-item">
        <div class="restaurant__img">
          <img src="${this._restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" width="100%" height="392px" alt="${this._restaurant.name}">
        </div>
      </div>
      <div class="grid-item">
        <div class="restaurant__content">
          <h3 class="restaurant__title">${this._restaurant.name}</h3>
          <div class="rating">
            <div class="rating__stars-outer">
              <div class="rating__stars-inner"></div>
            </div>
            <span>${this._restaurant.rating}</span>
          </div>
          <div class="restaurant__location">
            <address>
              <i class="fas fa-map-marker-alt"></i>
              ${this._restaurant.address}, ${this._restaurant.city}
            </address>
          </div>
          <div class="restaurant__category">
            ${restaurantCategories}
          </div>
          <p class="restaurant__description">${this._restaurant.description}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
