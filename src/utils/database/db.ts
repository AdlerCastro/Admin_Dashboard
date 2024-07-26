import mongoose from "mongoose";

const dbName = 'Dashboard'
const MONGO_URL = `mongodb+srv://adlercastro01:${process.env.DB_PWD}@dashboard.mojraqz.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Dashboard`

const Connect = async () => {
    try {
        await mongoose.connect(MONGO_URL)
        console.log("MongoDB conectado")
    } catch (error) {
        throw new Error(`Erro ao conectar ao MongoDB! Status: ${error}`)
    }
}

export default Connect