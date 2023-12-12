import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const ref = {
  paginationBox: document.getElementById('tui-pagination'),
};

export class CustomPagination {
  constructor() {
    this.pagination;
  }

  init() {
    let visiblePages = 3;

    const paginationOptions = {
      totalItems: 36,
      itemsPerPage: 12,
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

    this.pagination = new Pagination(ref.paginationBox, paginationOptions);
    this.pagination.on('afterMove', ({ page }) => console.log(page));
  }
}
