import axios from 'axios';

const BASE_URL = 'https://your-energy.b.goit.study/api';

export class ApiServices {
  constructor() {}

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
