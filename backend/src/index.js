//require('dotenv').config({path: './env'});

// import mongoose from 'mongoose';
// import { DB_Name } from './constants.js';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import {app} from './app.js';
// import express from "express";
// const app = express();

dotenv.config({path: './env'})

connectDB()
.then(() => {
    app.listen(process.env.PORT  || 4000 , () =>{
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("Mongodb connection failed !!!!!",err)
})

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