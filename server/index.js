/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
const express = require('express');
const path = require('path');
const morgan = require('morgan'); // for server tracking
const cookieParser = require('cookie-parser');
const connect = require('./connect');

const port = 3000;
const app = express();
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(morgan('dev')); // see in the server commandline the method, url and speed it took
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// ===================== Product Information =======================

// trying to figure out how to render the page and product number
app.get('/products/:productId', (req, res) => {
  // res.cookie('productInfo', `${req.params.productId}`);
  res.status(200).sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// all products
app.get('/api/products', (req, res) => {
  connect.getProducts()
    .then((result) => {
      res.status(200).send(result.data);
    })
    .catch((error) => {
      res.status(500).send('error at API fetch', error);
    });
});

// get by product id
app.get('/api/products/:productId', (req, res) => {
  const { productId } = req.params; // productId = req.params.productId;
  connect.getProductId({ id: productId })
    .then((result) => {
      res.status(200).send(result.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('error at API fetch', error);
    });
});

// get by product id
app.get('/api/products/:productId/styles', (req, res) => {
  const { productId } = req.params; // productId = req.params.productId;
  connect.getProductIdStyle({ id: productId })
    .then((result) => {
      res.status(200).send(result.data);
    })
    .catch((error) => {
      res.status(500).send('error at API fetch', error);
    });
});

// =====================QA GET=======================>>>
app.get('/api/qa/questions', (req, res) => {
  connect.getQuestions(req.query)
    .then((result) => {
      res.status(200).send(result.data);
    })
    .catch((error) => {
      res.status(200).send(error);
    });
});

app.get('/qa/questions/:question_id/answers', (req, res) => {
  connect.getAnswers(req.query)
  // console.log(req.query)
    .then((result) => {
      // console.log('ANSWERS IN SERVER', result.data);
      res.status(200).send(result.data);
    })
    .catch((error) => {
      // console.log(error);
      res.status(200).send(error);
    });
});

// =====================QA PUT============================>>>
app.put('/api/qa/questions/helpful/', (req, res) => {
  connect.getHelpfulnessQuestions({ question_id: req.body.questionId })
    .then((result) => {
      res.status(200).send(result.data);
    })
    .catch((err) => {
      res.send(500, err);
    });
});

// =====================REVIEWS GET=======================>>>
app.get('/api/reviews', (req, res) => {
  connect.getReviews(req.query)
    .then((result) => {
      res.send(200, result.data);
    })
    .catch((err) => {
      res.send(500, err);
    });
});

app.get('/api/reviews/meta', (req, res) => {
  console.log(req.query);
  connect.getReviewsMeta(req.query)
    .then((result) => {
      res.status(200).send(result.data);
    })
    .catch((error) => {
      res.status(200).send(error);
    });
});

app.get('/test', (req, res) => {
  res.status(200).send('hello from test!');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
