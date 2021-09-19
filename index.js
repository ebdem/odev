const express = require('express');
const bodyParser = require('body-parser');
const data = require('./data.json');
const cors = require('cors');

var app = express();

app.use(cors());

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const PORT = 5000;

app.listen(PORT, () => {
 console.log(`Server Running ${PORT}`, data);
});

app.get("/", (req, res) => {
    res.send(data);
  });