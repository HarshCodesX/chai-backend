// require('dotenv').config({path: './env'})

import dotenv from "dotenv" //to import it like this , change the dev script in package.json to ("dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js")
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({path: './env'})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err)
})





































/*

import mongoose from "mongoose"
import { DB_NAME } from "./constants";
import express from "express"
const app = express()

;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error: ", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`server is connected to port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error: ", error);
        throw error
    }
})()
*/