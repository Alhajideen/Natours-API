const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from the server', app: 'Natours' });
});

app.post('/', (req, res) => {
  res.status(200).send('You can post here');
});

const port = 5000;
app.listen(port, () => {
  console.log(`App live on port ${port}...`);
});
