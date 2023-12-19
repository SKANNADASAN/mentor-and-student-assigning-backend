import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();


const connect = async () => {
    const mongoURL= process.env.MONGO_URI
    mongoose.connect(mongoURL)
        .then(() => console.log('Connected to database'))
        .catch((err) => console.log(err));
}

connect();


export default connect;

