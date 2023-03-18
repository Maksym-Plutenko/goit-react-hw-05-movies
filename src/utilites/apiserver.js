import axios from 'axios';

const apiserver = {
  key: 'api_key=c8502b1448a0f91350559a97552ddf48',

  async trending() {
    axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
    const response = await axios.get(`trending/movie/day?${this.key}`);
    return response.data.results;
  },

  // async seach() {},

  async details(id) {
    axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
    const response = await axios.get(`movie/${id}?${this.key}&language=en-US`);
    return response.data;
  },

  async cast(id) {
    axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
    const response = await axios.get(`movie/${id}/credits?${this.key}&language=en-US`);
    // console.log(response);
    // console.log(response.data.cast);
    return response.data.cast;
  },

  async rewiews(id) {
    axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
    const response = await axios.get(`movie/${id}/reviews?${this.key}&language=en-US`);
    // console.log(response);
    // console.log(response.data);
    // console.log(response.data.results);
    return response.data.results;
  },

};

// https://api.themoviedb.org/3/trending/movie/day?api_key=c8502b1448a0f91350559a97552ddf48
// https://api.themoviedb.org/3/search/movie?api_key=c8502b1448a0f91350559a97552ddf48&language=en-US&query=cat&page=1&include_adult=false
// https://api.themoviedb.org/3/movie/11111?api_key=c8502b1448a0f91350559a97552ddf48&language=en-US
// https://api.themoviedb.org/3/movie/11111/credits?api_key=c8502b1448a0f91350559a97552ddf48&language=en-US
// https://api.themoviedb.org/3/movie/11111/reviews?api_key=c8502b1448a0f91350559a97552ddf48&language=en-US&page=1

export default apiserver;