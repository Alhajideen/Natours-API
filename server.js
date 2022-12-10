const app = require('./app');

const port = 5000;
app.listen(port, () => {
  console.log(`App live on port ${port}...`);
});
