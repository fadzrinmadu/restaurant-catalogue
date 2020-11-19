const createSkeletonRestaurantTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
      <div class="grid__item">
        <div class="card">
          <div class="card__header">
            <img class="card__img" src="/images/placeholder.png" alt="skeleton">
            <span class="skeleton">Lorem</span>
          </div>
          <div class="card__body">
            <h3 class="card__title skeleton">Lorem ipsum dolor sit.</h3>
            <div class="rating skeleton">Lorem ipsum dolor sit.</div>
            <p class="card__text paragraph skeleton">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean</p>
            <a class="btn btn--dark skeleton">More details</a>
          </div>
        </div>
      </div>
    `;
  }
  return template;
};

const createFallbackMessage = (message) => `
  <div class="message__fallback">
    <p>${message}</p>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="btn btn__like">
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="btn btn__like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createSkeletonRestaurantTemplate,
  createFallbackMessage,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
