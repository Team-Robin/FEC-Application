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

  getHelpfulnessQuestions: (questionId) => axios.put('/api/qa/questions/helpful', { questionId }),

  postAddQuestion: (options) => axios.post('/api/qa/questions', options),


  getAnswers: (id) => axios.get(`/qa/questions/${id}/answers`),

  getReviewMeta: (id) => axios.get(`/api/reviews/meta?id=${id}`),

  getReviews: (options) => axios.get('/api/reviews/', options),

  setHelpful: (reviewid) => axios.put(`/api/${reviewid}/helpful`),

  reportReview: (reviewid) => axios.put(`/api/${reviewid}/report`),

  getTest: () => axios.get('/test'),

};

export default Connect;
