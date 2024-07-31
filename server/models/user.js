const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost:27017/sync");

const userSchema = mongoose.Schema({
  email:{
    type:String,
    required:true,
    unique:true,
  },
  password:String,
  username:{
    type:String,
    required:true
  },
  // profileImage:{
  //   type:String,
  // }
})

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);