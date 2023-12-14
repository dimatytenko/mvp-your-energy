import icons from '../img/sprite.svg';

export const getRenderCategories = (categories, container) => {
  const markup = categories.reduce((acc, { filter, imgURL, name }) => {
    acc += `<li class="categories__card-item js-exercise" data-exercise=${name}>
        <img
          src="${imgURL}"
          alt="${name}"
          class="categories__card-img"
        />
        <h2 class="categories_card-title">${name}</h2>
        <p class="categories__card-text">${filter}</p>
      </li>`;
    return acc;
  }, '');
  container.innerHTML = markup;
};

export const getRenderExercises = (exercises, container) => {
  const markup = exercises.reduce(
    (acc, { rating, target, bodyPart, burnedCalories, name }) => {
      acc += `<li class="card-item">
    <div class="card-menu">
      <div class="card-menu-box">
        <div class="card-menu-workout">WORKOUT</div>
        <div class="card-menu-rating">
          <p class="card-menu-rating-text">${Math.round(rating)}.0</p>
          <svg
            id="card-menu-rating-icon"
            class="card-menu-rating-icon"
            width="18"
            height="18"
          >
            <use href="${icons}#icon-star"></use>
          </svg>
        </div>
      </div>
      <div class="card-menu-start">
        <p class="card-menu-start-text">Start</p>
        <svg
          id="card-menu-start-icon"
          class="card-menu-start-icon"
          width="16"
          height="16"
        >
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </div>
    </div>
    <div class="card-title">
      <div class="card-title-icon-box">
        <svg
          id="card-title-icon"
          class="card-title-icon"
          width="24"
          height="24"
        >
          <use href="${icons}#icon-run"></use>
        </svg>
      </div>
      <p class="card-title-text">${name}</p>
    </div>
    <div class="card-info">
      <div class="card-info-about">
        <p class="card-info-about-name">Burned calories:</p>
        <div class="card-info-about-value">${burnedCalories} / ...</div>
      </div>
      <div class="card-info-about">
        <p class="card-info-about-name">Body part:</p>
        <div class="card-info-about-value">${bodyPart}</div>
      </div>
      <div class="card-info-about">
        <p class="card-info-about-name">Target:</p>
        <div class="card-info-about-value">${target}</div>
      </div>
    </div>
  </li>`;
      return acc;
    },
    ''
  );
  container.innerHTML = markup;
};
