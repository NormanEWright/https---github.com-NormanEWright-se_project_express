const express = require('express');
const mongoose = require('mongoose');
const { PORT = 3001 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/wtwr_db', (r) => {
  console.log('Connected to DB')}, e => console.log('DB error', e));

const routes = require('./routes');
app.use(express.json());
app.use((req, res, next) => {
  req.user = {
    _id: '6383f7a41409e3265720fe33',
  };
  next();
});
app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening at port: ${PORT}`);
});
