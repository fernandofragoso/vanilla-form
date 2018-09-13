const express = require('express');
const { fields } = require('./utils/fields'); 

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/fields', (req, res) => {
  console.log('/GET fields');
  res.send(fields);
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`LISTENING ON PORT ${ PORT }`);
});