const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
  name:{type:String,require:true,trim:true},
  email:{type:String,require:true,trim:true},
  password:{type:String,require:true,trim:true},
  

})

const UserModel=mongoose.model("usercol",UserSchema)

module.exports={UserModel}