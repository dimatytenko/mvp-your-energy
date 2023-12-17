import { ApiServices } from './ApiServices';
import { CustomPagination } from './ApiPagination';

import { refs } from './refs';
import { getRenderCategories, getRenderExercises } from './functions';
import { API_TYPES } from './constants';

const pagination = new CustomPagination();
const apiCategories = new ApiServices(API_TYPES.FILTERS);
const apiExercises = new ApiServices(API_TYPES.EXEECISES);

refs.categoriesList.addEventListener('click', onCategoriesListClick);
refs.search.addEventListener('submit', e => onSearch(e, state));
refs.searchInput.addEventListener('input', e => onInput(e, state));
refs.searchInput.addEventListener('focus', onInputFocus);
refs.searchInput.addEventListener('blur', onInputBlur);

const state = {
  searchQuery: '',
};

if (refs.closeIcon) {
  refs.closeIcon.addEventListener('click', onClose);
}

document.addEventListener('click', function (e) {
  if (e.target.closest('#menu-close-icon')) {
    onClose(e);
  }
});

function onInput(e, state) {
  const inputText = e.currentTarget.value.trim();

  if (state.searchQuery !== inputText) {
    refs.searchBtn.innerHTML = `
      <svg id="menu-search-icon" class="menu-search-icon" width="18" height="18">
        <use href="./img/sprite.svg#icon-search"></use>
      </svg>
    `;
  }
}

function onInputFocus(e) {
  if (e.target.value.trim()) {
    e.target.placeholder = '';
  }
}

function onInputBlur(e) {
  if (!e.target.value.trim()) {
    e.target.placeholder = 'Search';
  }
}

async function onClose(e) {
  refs.searchBtn.innerHTML = `
      <svg id="menu-search-icon" class="menu-search-icon" width="18" height="18">
        <use href="./img/sprite.svg#icon-search"></use>
      </svg>
    `;
  refs.search.reset();

  const formData = new FormData(refs.search);
  state.searchQuery = formData.get('search').trim();

  const exercise = apiExercises.getExercise();
  apiExercises.setSearch(state.searchQuery);

  if (state.searchQuery === undefined) {
    onInputBlur(e);
  }

  await renderExercises(exercise);

  refs.categoryError.classList.add('visually-hidden');
}

async function onSearch(e, state) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  state.searchQuery = formData.get('search').trim();

  if (state.searchQuery !== '') {
    refs.searchBtn.innerHTML = `
      <svg id="menu-close-icon" class="menu-close-icon" width="18" height="18">
        <use href="./img/sprite.svg#icon-close"></use>
      </svg>
    `;
  }

  refs.categoryError.classList.add('visually-hidden');

  const exercise = apiExercises.getExercise();
  apiExercises.setSearch(state.searchQuery);

  await renderExercises(exercise);
  return state.searchQuery;
}

async function onCategoriesListClick(e) {
  if (e.target.nodeName !== 'LI') {
    return;
  }
  refs.exercise.textContent = '';
  refs.exerciseDecor.classList.add('visually-hidden');
  refs.categoryError.classList.add('visually-hidden');
  refs.search.classList.add('visually-hidden');

  const currentActiveItem = e.currentTarget.querySelector('.current');

  if (currentActiveItem) {
    currentActiveItem.classList.remove('current');
  }
  e.target.classList.add('current');
  const categorie = e.target.textContent;

  apiCategories.setCategory(categorie);
  apiExercises.setCategory(categorie);
  await renderCategories();
}

async function renderCategories() {
  const categories = await apiCategories.getCategories();
  refs.categorySceletonLoader.classList.add('visually-hidden');
  getRenderCategories(categories.results, refs.categoriesContainer);

  if (!categories?.totalPages) {
    refs.categoryError.classList.remove('visually-hidden');
  }
  if (categories.totalPages <= 1) {
    refs.paginationBox.classList.add('visually-hidden');
    return;
  }
  refs.paginationBox.classList.remove('visually-hidden');

  pagination.init(apiCategories, categories.totalPages, categories.perPage);
}
renderCategories();

refs.categoriesContainer.addEventListener('click', onCategoriesContainerClick);

async function onCategoriesContainerClick(e) {
  if (e.target.closest('.js-exercise')) {
    const exercise = e.target.closest('.js-exercise').dataset.exercise;

    refs.exercise.textContent = exercise;
    refs.exerciseDecor.classList.remove('visually-hidden');
    refs.search.classList.remove('visually-hidden');

    await renderExercises(exercise);
    return;
  }
}

async function renderExercises(exercise) {
  apiExercises.setExercise(exercise);

  const exercises = await apiExercises.getExercises();

  getRenderExercises(exercises.results, refs.categoriesContainer);

  if (!exercises?.totalPages) {
    refs.categoryError.classList.remove('visually-hidden');
  }
  if (exercises.totalPages <= 1) {
    refs.paginationBox.classList.add('visually-hidden');
    return;
  }
  refs.paginationBox.classList.remove('visually-hidden');

  pagination.init(apiExercises, exercises.totalPages, exercises.perPage);
}
