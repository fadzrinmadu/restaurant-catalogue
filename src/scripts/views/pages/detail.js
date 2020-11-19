import '../../components/restaurant-detail';
import '../../components/menu-list';
import '../../components/review-list';
import '../../components/review-form';
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import LoaderHelper from '../../utils/loader-helper';
import { createFallbackMessage } from '../templates/template-creator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <div class="detail-page">
        <section class="restaurant">
          <div class="container">
            <h2 class="section-heading">Restaurant Description</h2>
            <restaurant-detail class="restaurant__detail grid"></restaurant-detail>
          </div>
        </section>

        <section class="menu">
          <div class="container">
            <h2 class="section-heading">Menu</h2>
            <div class="menu__list grid">
              <menu-list class="menu__food"></menu-list>
              <menu-list class="menu__drink"></menu-list>
              </ul>
            </div>
          </div>
        </section>

        <section class="review" id="review">
          <div class="container">
            <h2 class="section-heading">Customer Reviews</h2>
            <review-list class="review__list grid"></review-list>
          </div>
        </section>

        <section class="review-form">
          <div class="container">
            <h2 class="section-heading">Give a Review</h2>
            <review-form class="review__form"></review-form>
          </div>
        </section>

        <div id="likeButtonContainer"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurantDetail = document.querySelector('restaurant-detail');
    const menuFood = document.querySelector('menu-list.menu__food');
    const menuDrink = document.querySelector('menu-list.menu__drink');
    const reviewList = document.querySelector('review-list');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    let message = '';

    try {
      const restaurant = await LoaderHelper.makeRequestWithMultipleLoader(
        [restaurantDetail, menuFood, menuDrink, reviewList],
        () => RestaurantSource.restaurantDetail(url.id),
      );

      await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          description: restaurant.description,
          city: restaurant.city,
          rating: restaurant.rating,
          pictureId: restaurant.pictureId,
        },
      });

      restaurantDetail.restaurant = restaurant;
      menuFood.menus = restaurant.menus.foods;
      menuDrink.menus = restaurant.menus.drinks;
      reviewList.reviews = restaurant.consumerReviews;
    } catch (error) {
      message = 'Oops! Something went wrong...';
      restaurantDetail.innerHTML = createFallbackMessage(message);
      menuFood.innerHTML = createFallbackMessage(message);
      menuDrink.innerHTML = createFallbackMessage(message);
      reviewList.innerHTML = createFallbackMessage(message);
    }
  },
};

export default Detail;
