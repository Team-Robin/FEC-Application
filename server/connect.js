/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
require('dotenv').config();
const axios = require('axios');

// Automatically sets the auth token on every outgoing request
axios.interceptors.request.use((req) => {
  req.headers.Authorization = process.env.GIT_TOKEN;
  return req;
}, (error) => Promise.reject(error));

const getProducts = (options = { page: 1, count: 5 }) => axios({
  method: 'GET',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products',
  params: {
    page: options.page,
    count: options.count,
  },
});

// id = string
// {id: string}
const getProductId = async (id = { id: 17071 }) => axios({
  method: 'GET',
  url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id.id}`,
});

const getProductIdStyle = async (id = { id: 17071 }) => axios({
  method: 'GET',
  url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id.id}/styles`,
});

const getQuestions = async ({ product_id }, options = { page: 1, count: 100 }) => axios({
  method: 'GET',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions',
  params: {
    product_id,
    page: options.page,
    count: options.count,
  },
});

const postAddAnswer = async (options, questionId) => axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${questionId}/answers`, options, console.log('inside connect', options));

const postAddQuestion = async (options) => axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions', options);

const getHelpfulnessQuestions = async ({ question_id }) => axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${question_id}/helpful`);

const putHelpfulnessAnswers = async ({ answer_id }) => axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${answer_id}/helpful`);

const getAnswers = async (id = { id: 104629 }, options = { page: 1, count: 100 }) => axios({
  method: 'GET',
  url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${id.id}/answers`,
  params: {
    page: options.page,
    count: options.count,
  },
});

// eslint-disable-next-line camelcase
const getReviewsMeta = async (product_id) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${product_id}`);

const getReviews = async (params) => axios.get(
  'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/', { params },
);

const reportReview = async (id) => axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${id}/report`);

const setHelpfulReview = async (id) => axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${id}/helpful`);

module.exports = {
  getProducts,
  getProductId,
  getProductIdStyle,
  getQuestions,
  getAnswers,
  getReviewsMeta,
  getReviews,
  getHelpfulnessQuestions,
  reportReview,
  setHelpfulReview,
  postAddQuestion,
  putHelpfulnessAnswers,
  postAddAnswer,
};
