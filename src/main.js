import './js/mobile-menu';

import './js/totopbutton.js';
import './js/footer.js';

import { CustomPagination } from './js/pagination';
import { ApiServices } from './js/ApiServices';
/*import { FetchPostApi } from './js/ApiServices';*/

const pagination = new CustomPagination();

pagination.init();

const apiServices = new ApiServices();

async function init() {
  const res = await apiServices.getQouteOfTheDay();
  console.log('res', res);
}
init();
