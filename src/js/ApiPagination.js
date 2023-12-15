import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import { refs } from './refs';
import { getRenderCategories, getRenderExercises } from './functions';
import { API_TYPES } from './constants';

export class CustomPagination {
  constructor() {
    this.pagination;
  }

  init(service, totalPages, perPage) {
    let visiblePages = 3;

    const paginationOptions = {
      totalItems: totalPages * perPage,
      itemsPerPage: perPage,
      visiblePages: visiblePages,
      template: {
        page: '<a href="#" class="tui-page-btn">{{page}}</a>',
        currentPage:
          '<span class="tui-page-btn tui-is-selected">{{page}}</span>',
        moveButton:
          '<a href="#" class="tui-page-btn tui-{{type}}">' +
          '<span class="tui-ico-{{type}}"></span>' +
          '</a>',
        disabledMoveButton:
          '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
          '<span class="tui-ico-{{type}}"></span>' +
          '</span>',
        moreButton:
          '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
          '<span class="tui-ico-ellip">...</span>' +
          '</a>',
      },
    };

    this.pagination = new Pagination(refs.paginationBox, paginationOptions);
    this.pagination.on('afterMove', async ({ page }) => {
      console.log('service', service);
      if (service.type === API_TYPES.FILTERS) {
        service.setPage(page);
        const categories = await service.getCategories();
        getRenderCategories(categories.results, refs.categoriesContainer);
      }
      if (service.type === API_TYPES.EXEECISES) {
        service.setPage(page);
        const exercises = await service.getExercises();
        getRenderExercises(exercises.results, refs.categoriesContainer);
      }
    });
  }
}
