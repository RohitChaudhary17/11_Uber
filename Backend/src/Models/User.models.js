import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const userSchema = new mongoose.Schema({

fullname:{
  
  firstname:{
    type:String,
    required:true,
    minlength:[3, `first name must be 3 chars long `]
  },

  lastname:{
    type:String,
  },

},

email:{
  type:String,
  required:true,
},

password:{
  type:String,
  required:true,
  select:false,
},

soketId:{
  type:String
}


} , {timestamps:true})


userSchema.methods.generateAuthToken = function(){
  const user = this;
  const authToken = jwt.sign({ _id:user._id } , process.env.JWT_SECRET )
  return authToken
}

userSchema.statics.hashPassword = async function(password){
  console.log(password)
  return await bcrypt.hash(password , 10)
}

userSchema.methods.comparePassword = async function(password){
  const user = this
 return await bcrypt.compare(password , user.password);
}


export const userModel = mongoose.model('User' , userSchema)