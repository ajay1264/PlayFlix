import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRoutes from "./routes/users.routes.js"
import videoRoutes from "./routes/video.routes.js"
import commentsRoutes from "./routes/comments.routes.js"
import authenticationRoutes from "./routes/authentication.routes.js"


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true , limit: "16kb"}))
// app.use(express.static("public"))
app.use(cookieParser())
app.use('/api/authentication', authenticationRoutes)
app.use('/api/users', userRoutes)
app.use('/api/video', videoRoutes)
app.use('/api/comments', commentsRoutes)



export default app