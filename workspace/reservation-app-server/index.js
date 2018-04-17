const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./handlers/error');

app.use(bodyParser.json());
app.use(cors())

//routes
app.use(function(req,res,next){
 let err = new Error("Not Found");
 err.status = 404;
  next(err);
});

app.use(errorHandler)

app.listen(3000, ()=>{
  console.log('Server listening on port 3000');
});