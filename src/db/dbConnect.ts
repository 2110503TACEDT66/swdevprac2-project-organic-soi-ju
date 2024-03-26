import mongoose from "mongoose";

let isConnected = false;

export const dbConnect = async() => {
    mongoose.set('strictQuery', true);
    if (isConnected) {
        return;
    }
    
    const MONGO_URI = process.env.MONGO_URI;
    if(!MONGO_URI) {
        throw new Error('No URI');
    }
    try {
        await mongoose.connect(MONGO_URI, {bufferCommands: false});
        isConnected = true;
        console.log(isConnected);
    } catch (error) {   
        console.log(error);
    }
}