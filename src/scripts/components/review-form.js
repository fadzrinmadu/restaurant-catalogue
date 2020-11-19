import RestaurantSource from '../data/restaurant-source';
import UrlParser from '../routes/url-parser';
import FormHelper from '../utils/form-helper';

class ReviewForm extends HTMLElement {
  connectedCallback() {
    this.render();
    this.querySelector('#reviewForm').addEventListener('submit', this.handleSubmit);
  }

  handleSubmit(event) {
    event.preventDefault();
    FormHelper.removeErrorMessage(this);

    const { id } = UrlParser.parseActiveUrlWithoutCombiner();
    const nameValue = this.name.value;
    const reviewValue = this.review.value;

    if (nameValue === '') {
      FormHelper.setErrorMessage(this.name, 'Please enter your name');
      return;
    }

    if (reviewValue === '') {
      FormHelper.setErrorMessage(this.review, 'Please enter your message');
      return;
    }

    FormHelper.resetInputForm(this);
    RestaurantSource.addNewReview({
      id,
      name: nameValue,
      review: reviewValue,
    }).then(async () => {
      const reviewList = document.querySelector('review-list');
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const { consumerReviews } = await RestaurantSource.restaurantDetail(url.id);
      reviewList.innerHTML = '';
      reviewList.reviews = consumerReviews;

      FormHelper.flashMessage(this, 'Review added successfully', 'success');
    });
  }

  render() {
    this.innerHTML = `
      <form class="form" id="reviewForm">
        <div class="form__group">
          <input class="form__input" type="text" name="name" id="nameField" placeholder="Enter your name" aria-label="Your name">
          <span class="form__invalid-message"></span>
        </div>
        <div class="form__group">
          <textarea class="form__textarea" name="review" id="reviewField" placeholder="Enter message" aria-label="Message"></textarea>
          <span class="form__invalid-message"></span>
        </div>
        <button class="btn btn--dark form__btn" type="submit">Submit</button>
      </form>
    `;
  }
}

customElements.define('review-form', ReviewForm);
