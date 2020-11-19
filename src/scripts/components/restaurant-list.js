import './restaurant-item';
import StarInitiator from '../utils/star-initiator';

class RestaurantList extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this._restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('restaurant-item');
      restaurantItemElement.restaurant = restaurant;
      this.appendChild(restaurantItemElement);

      StarInitiator.init({
        starContainer: restaurantItemElement.querySelector('.rating'),
        starTotal: 5,
        starRating: restaurant.rating,
      });
    });
  }
}

customElements.define('restaurant-list', RestaurantList);
