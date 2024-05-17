const bodyParser = require('body-parser')
const jwt= require('jsonwebtoken')
const cookieParser= require('cookie-parser')
const express = require('express');
const cors = require('cors');
const connectDB = require('./Database/config');
const productRoutes = require('./Routers/productRoutes');
const commentRoutes = require('./Routers/commentRoutes');
const login_Router=require('./Routers/login_r')
const singup_Router=require('./Routers/signup_r')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors(), express.json());
app.use(cookieParser());
app.use(bodyParser.json());
connectDB();

app.use('/api', productRoutes);
app.use('/api', commentRoutes);
app.use('/api',singup_Router);
app.use('/api',login_Router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
