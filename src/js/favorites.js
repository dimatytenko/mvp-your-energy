import { CustomPagination } from './ApiPagination';
import { LS_KEY } from './constants';
import { createMarkup } from './functions';
import { refs } from './refs';

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

  initPagination(savedExercis);
  if (savedExercis.length === 0) {
    errorFavorites.classList.remove('visually-hidden');
    return;
  }

  initListeners();
}

function onClickTrashBtn(event) {
  const clickedTrashItem = event.target.closest('.js-exercises-trash-btn');
  const exerciseItem = event.target.closest('.card-item');
  if (clickedTrashItem) {
    const favoritesExerciseList =
      document.getElementsByClassName('favorite-card-item');
    const savedExercis = JSON.parse(localStorage.getItem(LS_KEY)) ?? [];

    const exerciseId = exerciseItem.id;

    let indexTrashItem = savedExercis.findIndex(
      element => element._id === `${exerciseId}`
    );
    console.log(indexTrashItem);

    for (let i = 0; i < favoritesExerciseList.length; i += 1) {
      favoritesExerciseList[i].removeEventListener('click', onClickTrashBtn);
      favoritesExerciseList[i].removeEventListener('click', onClickStartBtn);
    }

    savedExercis.splice(indexTrashItem, 1);

    localStorage.removeItem(LS_KEY);
    localStorage.setItem(LS_KEY, JSON.stringify(savedExercis));
    console.log('savedExercis', savedExercis);

    createExerciseList();
  }
}

function onClickStartBtn(event) {
  const clickedStartItem = event.target.closest('.js-exercises-start-btn');
  const exerciseItem = event.target.closest('.card-item');
  if (clickedStartItem) {
    const favoritesExerciseList =
      document.getElementsByClassName('favorite-card-item');
    const savedExercis = JSON.parse(localStorage.getItem(LS_KEY)) ?? [];

    const exerciseId = exerciseItem.id;

    let indexStartItem = savedExercis.findIndex(
      element => element._id === `${exerciseId}`
    );
    console.log(indexStartItem);
    for (let i = 0; i < favoritesExerciseList.length; i += 1) {
      favoritesExerciseList[i].removeEventListener('click', onClickTrashBtn);
      favoritesExerciseList[i].removeEventListener('click', onClickStartBtn);
    }

    createExerciseList();
  }
}

function initListeners() {
  const favoritesExerciseList =
    document.getElementsByClassName('favorite-card-item');

  for (let i = 0; i < favoritesExerciseList.length; i += 1) {
    favoritesExerciseList[i].addEventListener('click', onClickTrashBtn);
    favoritesExerciseList[i].addEventListener('click', onClickStartBtn);
  }
}

function initPagination(savedExercis) {
  if (window.innerWidth < 1440) {
    element.innerHTML = createMarkup(savedExercis.slice(0, 8));
    const totalPages = Math.ceil(savedExercis.length / 8);
    pagination.init(null, totalPages, 8, initListeners);

    if (savedExercis.length <= 8) {
      refs.paginationBox.classList.add('visually-hidden');
    }
  } else {
    element.innerHTML = createMarkup(savedExercis);
  }
}
