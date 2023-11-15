import mongoose from "mongoose";
 
export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.on('connected',() =>{
            console.log("MongoDb connected successfully");
        })
        connection.on('error',(err)=>{
            console.log("MongoDb connection error, please make sure to MongoDb is running" + err);
        })
    }
    catch(error){
        console.log("There is an error");
        console.log(error);
    }
}