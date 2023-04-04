import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log(`Database is connected to ${connection.host}`)
    } catch (error) {
        console.error(error)
    }
}