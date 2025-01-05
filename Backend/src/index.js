import dotenv from "dotenv"
dotenv.config({
  path:'./.env'
})
import app from "./App.js";
import ConnectDB from "./DB/ConnectDB.js";



const port = process.env.PORT || 4000 ;


ConnectDB()
.then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  

})
.catch(error => {
  console.error(`Error connecting to database: ${error.message}`)
  process.exit(1)
 
})


app.get('/ping' , (req, res)=> {
  res.send("pong");
})


