
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskName: String,
  description: String,
  checklist: String,
  comments:String,
  projectList:String,
  userID:String,
  Username:String,
  dueDate: String,
  labels:String
});

const taskModel=mongoose.model("Taskcol",taskSchema)

module.exports={taskModel}


