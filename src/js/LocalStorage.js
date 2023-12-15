export class LocalStorage {
  constructor() {}

  getData(key) {
    try {
      const localData = localStorage.getItem(key);
      return JSON.parse(localData);
    } catch (error) {
      console.error('Get error: ', err);
    }
  }

  setData(key, value) {
    try {
      const localData = JSON.stringify(value);
      localStorage.setItem(key, localData);
    } catch (error) {
      console.error('Set error: ', err);
    }
  }

  removeData(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Remove error: ', err);
    }
  }
}
