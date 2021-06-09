// const axios = require('axios');
// eslint-disable-next-line import/no-unresolved
import axios from 'axios';

const Connect = {

  getProducts: () => axios.get('/api/products'),

  getProductById: (id) => axios.get(`/api/products/${id}`),

  getProductStyles: (id) => axios.get(`/api/products/${id}/styles`),

  getQuestions: (id) => axios.get('/api/qa/questions', {
    params: {
      product_id: id,
    },
  }),

  getAnswers: (id) => axios.get(`/qa/questions/${id}/answers`),

  getReviewMeta: (id) => axios.get('/api/reviews/meta', {
    params: {
      product_id: id,
    },
  }),

  getReviews: (options) => axios.get('/api/reviews/', options),

  setHelpful: (reviewid) => axios.put(`/api/${reviewid}/helpful`),

  reportReview: (reviewid) => axios.put(`/api/${reviewid}/report`),

};

export default Connect;
