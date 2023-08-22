const express=require("express")
const app=express()
const cors=require("cors")
const morgan=require("morgan")
const {connectDB}=require("./config/db.js")
const { UserRouter } = require("./controller/userController.js")
const { taskRuter } = require("./controller/taskController.js")
const { authentication } = require("./Middleware/authMiddleware.js")
require('dotenv').config()

const path=require('path')

//Midddle ware
app.use(express())
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())


// ......................route.....................


  app.use("/user",UserRouter)

  app.use(authentication)
  app.use("/task",taskRuter)
  
  

//.............. server.............................

app.listen(process.env.PORT,async()=>{
 
    try {

        await connectDB()
       console.log("Server Is Running")
        
    } catch (error) {

        console.log("error",error)
        
    }
 
})

