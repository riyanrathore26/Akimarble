const express =require('express')
const signup_controller= require("../Controllers/signup_c")
const singup_router=express.Router();

singup_router.post('/register',signup_controller.createSignup);

module.exports =  singup_router;
