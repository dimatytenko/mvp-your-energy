import icons from '../img/sprite.svg';

const elements = {
  trashFavoritesBtn: document.querySelector('.js-exercises-trash-btn'),
  StartFavoritesBtn: document.querySelector('.js-exercises-start-btn'),
  exerciseFavorites: document.querySelector('.js-exercise-favorites'),
  categoryErrorFavorites: document.querySelector('.js-favorites-error'),
};

const element = elements.exerciseFavorites;
const errorFavorites = elements.categoryErrorFavorites;

const LS_KEY = 'savedExercises';

createExerciseList();

function createExerciseList() {
  const savedExercis = JSON.parse(localStorage.getItem(LS_KEY)) ?? [];

  if (savedExercis.length === 0) {
    errorFavorites.classList.remove('visually-hidden');
    return;
  }

  element.innerHTML = createMarkup(savedExercis);
  const favoritesExerciseList =
    document.getElementsByClassName('favorite-card-item');

  for (let i = 0; i < favoritesExerciseList.length; i += 1) {
    favoritesExerciseList[i].addEventListener('click', onClickTrashBtn);
    favoritesExerciseList[i].addEventListener('click', onClickStartBtn);
  }

  function onClickTrashBtn(event) {
    const clickedTrashItem = event.target.closest('.js-exercises-trash-btn');
    const exerciseItem = event.target.closest('.card-item');
    if (clickedTrashItem) {
      const exerciseId = exerciseItem.id;

      let indexTrashItem = savedExercis.findIndex(
        element => element._id === `${exerciseId}`
      );
      console.log(indexTrashItem);

      for (let i = 0; i < favoritesExerciseList.length; i += 1) {
        favoritesExerciseList[i].removeEventListener(
          'click',
          onClickTrashBtn
        );
        favoritesExerciseList[i].removeEventListener(
          'click',
          onClickStartBtn
        );
      }

      savedExercis.splice(indexTrashItem, 1);

      localStorage.removeItem(LS_KEY);
      localStorage.setItem(LS_KEY, JSON.stringify(savedExercis));

      createExerciseList();
    }
  }

  function onClickStartBtn(event) {
    const clickedStartItem = event.target.closest('.js-exercises-start-btn');
    const exerciseItem = event.target.closest('.card-item');
    if (clickedStartItem) {
      const exerciseId = exerciseItem.id;

      let indexStartItem = savedExercis.findIndex(
        element => element._id === `${exerciseId}`
      );
      console.log(indexStartItem);
      for (let i = 0; i < favoritesExerciseList.length; i += 1) {
        favoritesExerciseList[i].removeEventListener(
          'click',
          onClickTrashBtn
        );
        favoritesExerciseList[i].removeEventListener(
          'click',
          onClickStartBtn
        );
      }

      createExerciseList();
    }
  }
}

function createMarkup(arr) {
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
