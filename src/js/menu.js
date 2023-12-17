import { refs } from './refs';

refs.exerciseRefresh.addEventListener('click', onRefresh);

function onRefresh(e) {
  location.reload();
}
