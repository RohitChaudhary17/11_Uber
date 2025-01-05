import { userModel } from "../Models/User.models.js"



const registerUser = async (req, res ) => {

  const {fullname ,  email , password} =  req.body 

  const isUserAlready = await userModel.findOne({ email });

  if (isUserAlready) {
      return res.status(400).json({ message: 'User already exist' });
  }

  const hashedPassword = await userModel.hashPassword(password);


  const user = await userModel.create({
    fullname: {
      firstname:fullname.firstname,
      lastname:fullname.lastname
  },
    email,
    password:hashedPassword
  })

  const token = user.generateAuthToken()

 return res.status(201)
  .json({user , token})

}





export{
  registerUser
}