const express=require("express");
const { taskModel } = require("../model/TaskModel");

const taskRuter=express.Router()

taskRuter.post('/create-task', async (req, res) => {
    try {
      const task= new taskModel(req.body)
         
           await task.save()
            res.status(201).json({
            message:"task is create",
            status:true,
            
        });
    } catch (err) {
      res.status(500).json({ err: 'Error creating task' });
      
    }
  })


  // Get tasks for the logged-in user
  taskRuter.get('/get-task', async (req, res) => {
    try {
      const taskList= await taskModel.find();
      res.status(201).json({
        message:"All Task",
        status:true,
        taskList
    });
    } catch (err) {
      res.status(500).json({ error: 'Error fetching tasks' });
    }
  });


  // update.........................
  taskRuter.patch("/task-update/:id", async (req,res)=>{

    const payload=req.body
    const id=req.params.id

     const note=await taskModel.findOne({_id:id})
     const userID_in_note=note.userID
     const userID_in_making_req=req.body.userID

    try {
        if(userID_in_note!==userID_in_making_req){
            res.send({
                message:"You are not Authorised person"
            })
        
        }else{
            await taskModel.findByIdAndUpdate({_id:id},payload)
            res.send({
                message:"Item is Updated"
            })

        }
       
        
    } catch (error) {
        res.send({message:"someThing went wrong"})
        
        
    }
   
   
    })


    //delete.......................................
    
    taskRuter.delete("/task-delete/:id", async (req,res)=>{
     
     const id=req.params.id
     const note=await taskModel.findOne({_id:id})
     const userID_in_note=note.userID
     const userID_in_making_req=req.body.userID

    try {
        if(userID_in_note!==userID_in_making_req){
            res.send({
                message:"You are not Authorised person"
            })
        
        }else{
            await taskModel.findByIdAndDelete({_id:id})
            res.send({
                message:"Item is Deleted",
                status:true
            })

        }
       
        
    } catch (error) {
        res.send({
            message:"someThing went wrong"
        })
        
        
    }
   
   
    })






  module.exports={taskRuter}