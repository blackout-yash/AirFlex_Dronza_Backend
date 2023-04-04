import app from './app.js'
import Razorpay from 'razorpay'
import { connectDB } from './config/database.js'

connectDB()

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET
})


app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(process.env.PORT, () => console.log(`Server is running on http://localhost:${process.env.PORT}`))