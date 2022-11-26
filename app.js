const express = require('express');
const mongoose = require('mongoose');
const { PORT = 3001 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/wtwr_db', (r) => {
  console.log('Connected to DB')}, e => console.log('DB error', e));

app.listen(PORT, () => {
  console.log(`App listening at port: ${PORT}`);
});
