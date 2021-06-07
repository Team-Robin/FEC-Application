// const axios = require('axios');
// eslint-disable-next-line import/no-unresolved
import axios from 'axios';

const Connect = {

  getProducts: () => axios.get('/api/products'),

  getProductById: (id) => axios.get(`/api/products/${id}`),

  getQuestions: () => axios.get('/api/qa/questions'),

  getReviewMeta: (id) => axios.get('/api/reviews/meta', {
    params: {
      product_id: id,
    },
  }),
};

export default Connect;
