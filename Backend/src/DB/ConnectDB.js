import mongoose from "mongoose"
import { Mongo_Database_Name } from "../constant.js"
console.log(Mongo_Database_Name)

const ConnectDB = async ()=> {
  try {

  const mongoInstace = await mongoose.connect(`${process.env.MONGO_URI}/${Mongo_Database_Name}`)
   console.log(`mongodb is connect !! ${mongoInstace.connection.host}`)
  }
  catch (error) {
    console.error('connection failed', error.message)
  }
}

export default ConnectDB