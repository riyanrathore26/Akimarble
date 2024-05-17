const login_db= require('../Models/userinfo');
const bcrypt= require('bcrypt')
const jwt = require('jsonwebtoken');
const express =require('express')
const cookieParser= require('cookie-parser')


const app=express();
app.use(cookieParser());


exports.createLogin=async(req,res)=>{
    const {email,password}=req.body;
    console.log(req.body);

    try {
        // Find user by email
        const user = await login_db.findOne({ email });
    
        if (!user) {
          return res.status(401).json({ error: 'User not found' });
        }
    
        // Compare the entered password with the hashed password
        const passwordMatch = await bcrypt.compare(password, user.password);
    
        if (passwordMatch) {
          // Generate a token
          const token = jwt.sign(
            { userId: user._id, email: user.email, firstname: user.firstname, userRole: user.role },
            'your_secret_key',
            { expiresIn: '1h' }
          );
          res.cookie('token', token, { httpOnly: true, maxAge: 3600000 }); // 1 hour expiration

          res.json({ success: true, message: 'Login successful', token, userId: user._id, firstname: user.firstname, userRole: user.role });
        } else {
          res.status(401).json({ error: 'Invalid email or password' });
        }
      } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
      

}