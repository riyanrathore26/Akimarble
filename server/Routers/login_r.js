const express = require('express')
const login_controller= require('../Controllers/login_c');
login_Router=express.Router();
const jwt= require('jsonwebtoken')


login_Router=('/login',login_controller.createLogin);

module.exports=login_Router;