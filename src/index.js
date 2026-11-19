// require("dotenv").config({path: "/.env"}) // -----old method with inconsistency with import-----
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is listening at port : ${process.env.PORT}`);
        
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!!", err);
    
})












// -----too work for index.js but not wrong-----
// import express from "express";

// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//         application.on("error", (error)=>{
//             console.log("ERR", error);
//             throw error
//         })

//         application.listen(process.env.PORT, ()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR: ", error);
//         throw err
//     }
// })()