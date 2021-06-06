
// const axios = require('axios');
import axios from 'axios';

const Connect = {

  getProducts:  () => {
    return axios.get(`/api/products`);
  },

  getProductById: (id) => {
    return axios.get(`/api/products/${id}`);
  },

  getQuestions: () => {
    return axios.get(`/api/qa/questions`);
  }

}

// export default Connect;

// module.exports = connect;
export default Connect;