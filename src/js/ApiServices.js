import axios from 'axios';

import { BASE_URL } from './constants';

export class ApiServices {
  constructor(type) {
    this.type = type;
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

  async getQuoteOfTheDay() {
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
