import { ApiServices } from './ApiServices';
import { CustomPagination } from './ApiPagination';

import { refs } from './refs';
import { getRenderCategories } from './functions';
import { API_TYPES } from './constants';

const pagination = new CustomPagination();

refs.categoriesList.addEventListener('click', onCategoriesListClick);

async function onCategoriesListClick(e) {
  if (e.target.nodeName !== 'LI') {
    return;
  }
  const currentActiveItem = e.currentTarget.querySelector('.current');
  if (currentActiveItem) {
    currentActiveItem.classList.remove('current');
  }
  e.target.classList.add('current');
  const categorie = e.target.textContent;
  await renderCategories(categorie);
}

async function renderCategories(categorie = 'Muscles') {
  const apiServices = new ApiServices(API_TYPES.FILTERS);
  apiServices.setCategory(categorie);

  const categories = await apiServices.getCategories();
  getRenderCategories(categories.results, refs.categoriesContainer);

  pagination.init(apiServices, categories.totalPages, categories.perPage);
}
renderCategories();
