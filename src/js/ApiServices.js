import axios from 'axios';

const BASE_URL = 'https://your-energy.b.goit.study/api';

export class ApiServices {
  constructor() {
    this.category = 'Muscles';
    this.page = 1;
  }

  setCategory(category) {
    this.category = category;
  }

  setPage(page) {
    this.page = page;
  }

  async getCategories() {
    try {
      const res = await axios.get(
        `${BASE_URL}/filters?filter=${this.category}&page=${this.page}&perPage=12`
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getQouteOfTheDay() {
    try {
      const res = await axios.get(`${BASE_URL}/quote`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  async subscription(data) {
    try {
      const res = await axios.post(`${BASE_URL}/subscription`, data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
}
