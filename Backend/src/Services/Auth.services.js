import { userModel } from "../Models/User.models.js"



const createUser = async ({
  firstname,
  lastname,
  email,
  password
}) => {

  if(!firstname || !email || !password){
    throw new Error('all fields are required')
  }

  const user = await userModel.create({
    fullname:{
     firstname,
     lastname,
    },

    email,
    password,

  })

  return user



}


export{
  createUser
}