import axios from 'axios';

import { BASE_URL, EXERCISES_TYPES } from './constants';

export class ApiServices {
  constructor(type) {
    this.type = type;
    this.category = 'Muscles';
    this.exercise = '';
    this.page = 1;
    this.search = '';
  }

  setCategory(category) {
    this.category = category;
  }

  setPage(page) {
    this.page = page;
  }

  setExercise(exercise) {
    this.exercise = exercise;
  }

  getExercise() {
    return this.exercise;
  }

  setSearch(search) {
    this.search = search;
  }

  async getCategories() {
    try {
      const res = await axios.get(
        `${BASE_URL}/filters?filter=${this.category}&page=${this.page}&perPage=12`
      );
      return res.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getExercises() {
    try {
      const res = await axios.get(
        `${BASE_URL}/exercises?${EXERCISES_TYPES[this.category]}=${
          this.exercise
        }&keyword=${this.search}&page=${this.page}&perPage=12`
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getQuoteOfTheDay() {
    try {
      const res = await axios.get(`${BASE_URL}/quote`);
      return res.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async subscription(data) {
    try {
      const res = await axios.post(`${BASE_URL}/subscription`, data);
      return res.data;
    } catch (error) {
      return error;
    }
  }
}
