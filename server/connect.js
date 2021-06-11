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

const getQuestions = async ({ product_id }, options = { page: 1, count: 5 }) => axios({
  method: 'GET',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions',
  params: {
    product_id,
    page: options.page,
    count: options.count,
  },
});

const getHelpfulnessQuestions = async ({ question_id }) => axios({
  method: 'PUT',
  url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${question_id}/helpful`,
  headers: {
    Authorization: process.env.GIT_TOKEN,
  },
  data: {
    question_id,
  },
});

const getAnswers = async (id = { id: 104629 }, options = { page: 1, count: 5 }) => axios({
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
  'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/',
  { params }
);

const reportReview = async (review_id) => axios.put({
  method: 'GET',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/',
  headers: {
    Authorization: process.env.GIT_TOKEN,
  },
});

module.exports = {
  getProducts,
  getProductId,
  getProductIdStyle,
  getQuestions,
  getAnswers,
  getReviewsMeta,
  getReviews,
  getHelpfulnessQuestions,
};
