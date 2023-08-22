const { UserModel } = require("../model/userModel");

const express=require("express")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
 
const UserRouter=express.Router()


UserRouter.post('/register', async(req, res) => {
    try {
      const { name, email, password} = req.body;
  
      // Check if the user already exists in the database

      const existingUser = await UserModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create the new user in the database
      const newUser = new UserModel({
        name,
        email,
        password: hashedPassword,
      
      });
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
       res.status(500)
      .json({ message: 'An error occurred',
              error:error,
              status:false
         });

         
    }
  });



  
  //.................... Route to login...............................

  UserRouter.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find the user by email in the database
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Compare the provided password with the hashed password in the database

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid Credentials' });
      }
  
      // Create and send a JSON Web Token (JWT) for authentication
      const token = jwt.sign({ userID: user._id,username:user.name },
         'auth');
  
      res.status(200).json({ message: 'Login successful',
       token,username:user.name });

    } catch (error) {
      res.status(500).json({ message: 'An error occurred' });
    }
  });
  

  
  module.exports = {UserRouter};