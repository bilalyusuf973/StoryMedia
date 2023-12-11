import mongoose from 'mongoose';

export default async function connectToMongo(){
    try{
        if (process.env.DATABASE_URI){
            await mongoose.connect(process.env.DATABASE_URI);
        }
        else throw new Error("Database URI not found!");
    }catch(error){
        console.log(error);
    }
};
