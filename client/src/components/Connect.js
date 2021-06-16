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

  putHelpfulnessAnswers: (answerId) => axios.put(`/api/qa/answers/${answerId}/helpful`),

  putReportQuestion: (questionId) => axios.put(`/api/qa/questions/${questionId}/report`),

  postAddQuestion: (options) => axios.post('/api/qa/questions', options),

  postAddAnswer: (options, questionId) => axios.post(`/api/qa/questions/${questionId}/answers`, options),

  getAnswers: (id) => axios.get(`/qa/questions/${id}/answers`),

  getReviewMeta: (id) => axios.get(`/api/reviews/meta?id=${id}`),

  getReviews: (options) => axios.get('/api/reviews/', options),

  setHelpful: (reviewid) => axios.put(`/api/${reviewid}/helpful`),

  reportReview: (reviewid) => axios.put(`/api/${reviewid}/report`),

  submitReview: (body) => axios.post('/reviews', body),

  getTest: () => axios.get('/test'),

};

export default Connect;
