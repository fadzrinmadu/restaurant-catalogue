import '../../components/restaurant-list';
import RestaurantSource from '../../data/restaurant-source';
import {
  createSkeletonRestaurantTemplate,
  createFallbackMessage,
} from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="home-page">
        <section class="hero">
          <div class="container">
            <h2 class="main-heading">
              <span class="main-heading__title">Find Your Best Restaurant</span>
              <span class="main-heading__subtitle">Best places, best dishes & best deals</span>
            </h2>
            <img 
              class="hero__img lazyload"
              src="/images/hero-image_4-large.jpg"
              srcset="/images/hero-image_4-small.jpg 480w, /images/hero-image_4-large.jpg 800w"
              sizes="(max-width: 600px) 480px, 800px"
              alt="hero"
            >
          </div>
        </section>
        
        <section class="restaurant">
          <div class="container">
            <h2 class="section-heading">Explore Restaurant</h2>
            <restaurant-list class="restaurant__list grid">
              ${createSkeletonRestaurantTemplate(20)}
            </restaurant-list>
          </div>
        </section>
      </div>
    `;
  },

  async afterRender() {
    const restaurantList = document.querySelector('.restaurant__list');
    let message = '';

    try {
      const restaurants = await RestaurantSource.restaurantList();
      restaurantList.innerHTML = '';
      restaurantList.restaurants = restaurants;
    } catch (error) {
      message = 'Oops! Something went wrong...';
      restaurantList.innerHTML = createFallbackMessage(message);
    }
  },
};

export default Home;
