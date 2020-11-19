const assert = require('assert');

Feature('Unliking Restaurants');

Before((I) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', (I) => {
  I.seeElement('restaurant-list');
  I.see("You don't have a favorite restaurant. try find it now!", '.message__fallback');
});

Scenario('Unliking one restaurant', async (I) => {
  I.seeElement('restaurant-list');
  I.see("You don't have a favorite restaurant. try find it now!", '.message__fallback');

  I.amOnPage('/');
  I.seeElement('restaurant-item .btn');

  const firstRestaurant = locate('restaurant-item .card__title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(locate('restaurant-item .btn').first());

  I.seeElement('[aria-label="like this restaurant"]');
  I.click('[aria-label="like this restaurant"]');

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-item');

  const likedRestaurantTitle = await I.grabTextFrom('.card__title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.seeElement('restaurant-item .btn');
  I.click(locate('restaurant-item .btn').first());

  I.seeElement('[aria-label="unlike this restaurant"]');
  I.click('[aria-label="unlike this restaurant"]');

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-list');
  I.see("You don't have a favorite restaurant. try find it now!", '.message__fallback');
});
