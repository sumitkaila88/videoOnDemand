const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

const app = express();
// const router = express.Router();

//config URLs
// const db = require('./configs/configs').connectionURL;


let DUMMY_VARIABLE = [];
const port = 7777;

app.use(bodyParser.json());
app.use(cors());

app.post('/history', (req, res) => {
  const videoItem = req.body;
  DUMMY_VARIABLE.push(videoItem);
  res.status(201).send(DUMMY_VARIABLE);
});

app.get('/history', (req, res) => {
  
  res.send(DUMMY_VARIABLE);
})

app.get('/',(request, response) => {
  response.sendFile(__dirname + '/index.html');
})

app.get('/videolist', (request, response) => {
  axios.get('https://accedo-ps-programming-exam.s3-ap-southeast-1.amazonaws.com/movies.json')
     .then(res => { 
       response.send(res.data);
      
     })
     .catch(error => {
       response.send(error);
     });
})



app.listen(port, ()=> {
  console.log(`app listening on port ${port}`);
})