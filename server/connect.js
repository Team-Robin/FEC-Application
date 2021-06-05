require('dotenv').config()
const axios = require('axios');



const getProducts = async (options = {page: 1, count: 5}) => {
  return await axios({
    method: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products',
    headers: {
      'Authorization': process.env.GIT_TOKEN
    },
    params: {
      page: options.page,
      count: options.count
    }
  });
}

// id = string
// {id: string}
const getProductId = async (id = {id: 17071}) => {
  return await axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id.id}`,
    headers: {
      'Authorization': process.env.GIT_TOKEN
    },
    params: {

    }
  });
}

const getQuestions = async (product_id, options = {page: 1, count: 5}) => {
  return await axios({
    method: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions',
    headers: {
      'Authorization': process.env.GIT_TOKEN
    },
    params: {
      product_id: product_id.product_id,
      page: options.page,
      count: options.count
    }
  });

}




module.exports = {
  getProducts: getProducts,
  getProductId: getProductId,
  getQuestions: getQuestions
}