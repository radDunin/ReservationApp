const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
  email:{
    type: String,
    required: true,
    unique: true
  },
  username:{
    type: String,
    required: true,
    unique: true
  },
 password:{
    type: String,
    required: true,
  },
  profileImageUrl:{
    tupe:String
  }
});

userSchema.pre("save", async function(next){
  try{
    if(!this.isModified("password")){
        return next();
       }
    let hashedPassword = await bcrypt.hash(this.password,10);
    this.password = hashedPassword;
  }catch(err){
    return next(err);
  }
});

userSchema.method.comparePassword = async function(candidatePassword,next){
  try{
    let isMatch = await bcrypt.compare(candidatePassword,this.password);
    return isMatch;
  }catch(err){
     retrun next(err);    
  }
}

const User = mongoose.model("User",userSchema);
module.exports = User;