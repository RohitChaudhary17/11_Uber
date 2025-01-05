import {Router} from 'express'
import {  SignupValidator } from '../Middlewares/Validator.middleware.js';
import { registerUser } from '../Controllers/Auth.controller.js';

const Authrouter = Router();

Authrouter.route('/register').post(SignupValidator , registerUser )



export default Authrouter