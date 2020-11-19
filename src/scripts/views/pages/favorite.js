import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import LoaderHelper from '../../utils/loader-helper';
import { createFallbackMessage } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="favorite-page">
        <section class="restaurant restaurant__favorite">
          <div class="container">
            <h2 class="section-heading">Favorite Restaurant</h2>
            <restaurant-list class="restaurant__list grid"></restaurant-list>
          </div>
        </section>
      </div>
    `;
  },

  async afterRender() {
    const restaurantList = document.querySelector('restaurant-list');
    let message = '';

    try {
      const restaurants = await LoaderHelper.makeRequestWithLoader(
        restaurantList,
        FavoriteRestaurantIdb.getAllRestaurants,
      );

      if (restaurants.length >= 1) {
        restaurantList.restaurants = restaurants;
      } else {
        message = "You don't have a favorite restaurant. try find it now!";
        restaurantList.innerHTML = createFallbackMessage(message);
      }
    } catch (error) {
      message = 'Oops! Something went wrong...';
      restaurantList.innerHTML = createFallbackMessage(message);
    }
  },
};

export default Favorite;
