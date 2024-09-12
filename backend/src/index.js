import dotenv from 'dotenv'
import connectDB from './db/index.js';
import app from '../src/app.js'

dotenv.config({
    path: './env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, ()=> {
        console.log(`Server is Running at port: ${process.env.PORt}`);
        
    })
})
.catch((err)=>{
    console.log("MONGO DB CONNECTION FAILED", err);
    
})