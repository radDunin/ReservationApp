const mongoose = require("mongoose");
mongoose.set("debug",true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://https://reservationapp-raddunin575255.codeanyapp.com/reservationapp",{
  keepAlive:true,
  useMongoClient: true
})
