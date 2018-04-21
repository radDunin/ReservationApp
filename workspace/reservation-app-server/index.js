require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./handlers/error');
const authRoutes = require("./routes/auth");
const db = require("./models");

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api/auth", authRoutes);

//routes
app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err)
})

app.use(errorHandler)

app.listen(3000, function(){
  console.log(`APP RUNNING ON PORT 3000`);
});