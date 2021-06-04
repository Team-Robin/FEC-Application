const express = require('express')
const app = express()
const path = require('path');
const port = 3000
const morgan = require('morgan'); // for server tracking
const connect = require('./connect.js');

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(morgan('dev')); // see in the server commandline the method, url and speed it took

app.get('/', (req, res) => {
  res.send('Hello World!')
})


//===================== Product Information =======================

app.get('/products/:productId', (req, res) => {
  console.log('body', req.params.productId);
  res.productInfo = {}; // from connect.getProductId();
  res.status(200).sendFile(path.join(__dirname, '..', 'public/index.html'));
});

app.get('/api/products', (req, res) => {
  connect.getProducts()
    .then((result) => {
      console.log('from API', result);
      res.status(200).send(result.data);
    })
    .catch((error) => {
      res.status(500).send('error at API fetch');
    });
})

app.get('/api/products/', (req, res) => {

  connect.getProducts()
    .then((result) => {
      console.log('from API', result);
      res.status(200).send(result.data);
    })
    .catch((error) => {
      res.status(500).send('error at API fetch');
    });
})

//=====================QA GET=======================>>>
app.get('/api/qa/questions', (req, res)=> {
  connect.getQuestions()
    .then((result) => {
      console.log('From QA API', result);
      res.status(200).send(result.data);
    })
    .catch((error) => {
      res.status(200).send(result.data);
    })
});


app.get('/test', (req, res) => {
  res.status(200).send('hello from test!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})