import icons from '../img/sprite.svg';
import { CustomPagination } from './ApiPagination';
import { LS_KEY } from './constants';
import { createMarkup } from './functions';

const elements = {
  trashFavoritesBtn: document.querySelector('.js-exercises-trash-btn'),
  StartFavoritesBtn: document.querySelector('.js-exercises-start-btn'),
  exerciseFavorites: document.querySelector('.js-exercise-favorites'),
  categoryErrorFavorites: document.querySelector('.js-favorites-error'),
};

const element = elements.exerciseFavorites;
const errorFavorites = elements.categoryErrorFavorites;
const pagination = new CustomPagination();

createExerciseList();

function createExerciseList() {
  const savedExercis = JSON.parse(localStorage.getItem(LS_KEY)) ?? [];

  if (savedExercis.length === 0) {
    errorFavorites.classList.remove('visually-hidden');
    return;
  }

  if (window.innerWidth < 1440 && savedExercis.length > 8) {
    element.innerHTML = createMarkup(savedExercis.slice(0, 8));
    const totalPages = Math.ceil(savedExercis.length / 8);
    pagination.init(null, totalPages, 8);
  } else {
    element.innerHTML = createMarkup(savedExercis);
  }

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

      if (indexTrashItem >= 0) {
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
      }

      element.innerHTML = createMarkup(savedExercis);
      createExerciseList();
    }
  }

  function onClickStartBtn(event) {
    const clickedStartItem = event.target.closest('.js-exercises-start-btn');
    const exerciseItem = event.target.closest('.card-item');
    if (clickedStartItem) {
      const exerciseId = exerciseItem.id;

      let indexTrashItem = savedExercis.findIndex(
        element => element._id === `${exerciseId}`
      );
      if (indexTrashItem >= 0) {
        localStorage.removeItem(LS_KEY);
        localStorage.setItem(LS_KEY, JSON.stringify(savedExercis));
      }

      element.innerHTML = createMarkup(savedExercis);
      createExerciseList();
    }
  }
}
