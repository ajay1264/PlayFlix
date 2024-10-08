import mongoose from "mongoose"
import User from "../models/users.models.js"
import bcrypt from "bcrypt"



export const signUp = async (req, res) => {
   // console.log(req.body);  // Log the received data to verify the input fields
   try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt)
    const newUser = new User({...req.body, password: hash})
     await newUser.save()
     res.status(200).send("User has been created")
  } catch (error) {
   
  }
}
