import { ApiServices } from './ApiServices';
import { LocalStorage } from './LocalStorage';

const apiServices = new ApiServices();
const localStorage = new LocalStorage();

async function init() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const qoute = localStorage.getData('qoute');
  const fullDate = `${day}.${month}.${year}`;

  if (qoute?.date === fullDate) {
    console.log('qoute from LS', qoute);
    return;
  } else {
    const res = await apiServices.getQouteOfTheDay();
    const localData = {
      date: fullDate,
      data: res,
    };
    localStorage.setData('qoute', localData);

    console.log('res', localData);
  }
}
init();
