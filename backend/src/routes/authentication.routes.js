import express from 'express'
import { signUp } from '../controllers/authentication.controllers.js'

const router = express.Router()

//Create a user
router.post("/signup", signUp)

//sign in 
router.post("/signin")

//google authentication
router.post("/google")


export default router