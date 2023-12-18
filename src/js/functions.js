import icons from '../img/sprite.svg';

export const getRenderCategories = (categories, container) => {
  const markup = categories.reduce((acc, { filter, imgURL, name }) => {
    acc += `<li class="categories__card-item js-exercise"
      style="background-image: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${imgURL}), lightgray -56.383px -2px / 129.575% 103.719% no-repeat"
      data-exercise=${name}>
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
    (acc, { rating, target, bodyPart, burnedCalories, name, _id, time }) => {
      acc += `<li class="card-item" id=${_id}>
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
        <div class="card-info-about-value card-time">${burnedCalories} / ${time} min</div>
      </div>
      <div class="card-info-about">
        <p class="card-info-about-name">Body part:</p>
        <div class="card-info-about-value card-body">${bodyPart}</div>
      </div>
      <div class="card-info-about">
        <p class="card-info-about-name">Target:</p>
        <div class="card-info-about-value card-target">${target}</div>
      </div>
    </div>
  </li>`;
      return acc;
    },
    ''
  );
  container.innerHTML = markup;
};

export function createMarkup(arr) {
  return arr
    .map(
      ({ _id, target, bodyPart, burnedCalories, time, name }) => `
            <li class="card-item favorite-card-item" id=${_id}>
                <div class="card-menu">
                <div class="exercises-box">
                    <div class="card-menu-workout">WORKOUT</div>
                    <button class="exercises-trash-btn js-exercises-trash-btn" type="button">
                        <svg
                            class="card-menu-trash-icon"
                            width="16"
                            height="16"
                        >
                            <use href="${icons}#icon-trash"></use>
                        </svg>
                    </button>
                </div>

                <div class="card-menu-start">
                    <button class="exercises-start-btn js-exercises-start-btn" type="button">
                        <p class="card-menu-start-text">Start</p>
                        <svg
                            class="card-menu-start-icon"
                            width="16"
                            height="16"
                        >
                            <use href="${icons}#icon-arrow-right"></use>
                        </svg>
                    </button>
                </div>
                </div>

                <div class="card-title">
                <div class="card-title-icon-box">
                    <svg
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
                <div class="gap-card">
                    <p class="card-info-about-name">
                    Burned calories:
                    <div class="card-info-about-value card-time">${burnedCalories} / ${time} min</div>
                    </p>
                </div>
                <div class="gap-card">
                    <p class="card-info-about-name">
                    Body part:
                    <div class="card-info-about-value card-body">${bodyPart}</div>
                    </p>
                </div>
                <div class="gap-card">
                    <p class="card-info-about-name">
                    Target:
                    <div class="card-info-about-value card-target">${target}</div>
                    </p>
                </div>
                </div>
            </li>
        `
    )
    .join('');
}
