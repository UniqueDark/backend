//require('dotenv').config({path: './env'});

// import mongoose from 'mongoose';
// import { DB_Name } from './constants.js';
import connectDB from './db/db.js';
// import express from "express";
// const app = express();


connectDB()

// (async () =>{
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
//        app.on("error",()=>{
//         console.log("ERROR",error);
//         throw error
//        })
//        app.listen(process.env.PORT, () =>{
//         console.log(`App is listening on port ${process.env.PORT}`)
//        })
//     }
//     catch(error){
//         console.error("ERROR",error);
//         throw error
//     }
// })()