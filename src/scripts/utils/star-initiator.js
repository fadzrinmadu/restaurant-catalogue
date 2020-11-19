const StarInitiator = {
  init({ starContainer, starTotal, starRating }) {
    this._starContainer = starContainer;
    this._starTotal = starTotal;
    this._starRating = starRating;
    this._setRating();
  },

  _setRating() {
    const starPercentage = (this._starRating / this._starTotal) * 100;
    const starPercentageRounded = `${(Math.round(starPercentage) / 10) * 10}%`;
    const restaurantStars = this._starContainer.querySelector('.rating__stars-inner');
    restaurantStars.style.width = starPercentageRounded;
  },
};

export default StarInitiator;
