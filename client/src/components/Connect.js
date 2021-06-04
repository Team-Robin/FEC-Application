
// const axios = require('axios');
import axios from 'axios';

const Connect = {

  getProducts:  () => {
    return axios.get(`/api/products`);
  },

  getQuestions: () => {
    return axios.get(`/api/qa/questions`);
  }

}

// export default Connect;

// module.exports = connect;
export default Connect;