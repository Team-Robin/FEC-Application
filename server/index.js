const app = require('./router');

const port = 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
