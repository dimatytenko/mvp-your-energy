import { refs } from './refs';
console.log(refs.exerciseRefresh);

refs.exerciseRefresh.addEventListener('click', onRefresh);

function onRefresh(e) {
  location.reload();
}
