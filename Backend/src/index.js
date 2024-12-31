import dotenv from "dotenv"
dotenv.config({
  path:'./.env'
})
import app from "./App.js";

const port = process.env.PORT || 4000


app.listen(port , ()=> {
  console.log(`server is litening on http://localhost:${port}`)
})