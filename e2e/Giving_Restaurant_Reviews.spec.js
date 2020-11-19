const assert = require('assert');

Feature('Giving Restaurant Reviews');

Scenario('giving review one restaurant', async (I) => {
  I.amOnPage('/');
  I.seeElement('restaurant-item .btn');
  I.click(locate('restaurant-item .btn').first());

  I.seeElement('#reviewForm');
  
  const name = 'Aan';
  const message = 'Best restaurant so far';

  I.fillField('#nameField', name);
  I.fillField('#reviewField', message);

  I.click('#reviewForm .form__btn');

  I.seeElement(locate('review-item').last());
  const lastReviewUsername = locate('review-item .card__title').last().withText(name);
  const lastReviewMessage = locate('review-item .card__text').last().withText(message);

  const lastReviewUserNameText = await I.grabTextFrom(lastReviewUsername);
  const lastReviewMessageText = await I.grabTextFrom(lastReviewMessage);

  assert.strictEqual(name, lastReviewUserNameText);
  assert.strictEqual(message, lastReviewMessageText);
});
