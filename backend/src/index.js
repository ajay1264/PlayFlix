import express from 'express'

const app = express()


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is at http://localhost:${port}`);
    
})