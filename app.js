import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import session from 'express-session'
import passport from 'passport'
import { connectPassport } from './utils/provider.js'
import userRoute from './routes/user.js'
import cookieParser from 'cookie-parser'
import { errorMiddleware } from './middlewares/errorMiddleware.js'
import orderRoute from './routes/order.js'


const app = express()
export default app

dotenv.config({
    path: './config/config.env'
})
app.use(express.json())

// Google Authentication
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(cookieParser())

app.use(passport.authenticate('session'))
app.use(passport.initialize())
app.use(passport.session())

connectPassport()

app.use('/api/', userRoute)

// Order
app.use(urlencoded({
    extended: true
}))

app.use('/api/', orderRoute)

app.use(errorMiddleware)