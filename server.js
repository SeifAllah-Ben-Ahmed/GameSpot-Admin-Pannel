require('dotenv').config({ path: './config.env' });
const express = require('express');
const connectDB = require('./config/connectDB');

const app = express();
const port = process.env.PORT || 5000;
connectDB();

app.get('/', (req, res) => {
  res.send('hello from api');
});
app.all('*', (req, res, next) => {
  res.status(404).json({ message: 'no yet implimented' });
});
app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log(`App running on port ${port}... 📡📡`);
});
