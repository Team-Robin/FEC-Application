/* eslint-disable import/no-unresolved */
require('dotenv').config();
const axios = require('axios');

const getProducts = (options = { page: 1, count: 5 }) => axios({
  method: 'GET',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products',
  headers: {
    Authorization: process.env.GIT_TOKEN,
  },
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
  headers: {
    Authorization: process.env.GIT_TOKEN,
  },
  params: {
  },
});

// eslint-disable-next-line camelcase
const getQuestions = async (product_id, options = { page: 1, count: 5 }) => axios({
  method: 'GET',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions',
  headers: {
    Authorization: process.env.GIT_TOKEN,
  },
  params: {
    product_id: product_id.product_id,
    page: options.page,
    count: options.count,
  },
});

// eslint-disable-next-line camelcase
const getReviewsMeta = async (product_id) => axios({
  method: 'GET',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta',
  headers: {
    Authorization: process.env.GIT_TOKEN,
  },
  params: product_id,
});

module.exports = {
  getProducts,
  getProductId,
  getQuestions,
  getReviewsMeta,
};
