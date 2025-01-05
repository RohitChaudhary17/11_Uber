import express from "express";
import cors from "cors"
import morgan from "morgan";


const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))


import Authrouter from "./Routes/Auth.route.js";


app.use('/auth' , Authrouter)


export default app