import CONFIG from '../globals/config';
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async restaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static addNewReview(data) {
    return fetch(API_ENDPOINT.ADD_NEW_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY,
      },
      body: JSON.stringify(data),
    });
  }
}

export default RestaurantSource;
