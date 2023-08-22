import React, { useState } from 'react'


 import {Input,Heading,Textarea,FormLabel,Button,VStack,useToast} from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom';


const CreateTask = () => {
    const navigate=useNavigate()
    
    const toast = useToast();


    const [taskData, setTaskData] = useState({
    taskName: '',
    description: '',
    checklist: '',
    comments: "",
    projectList: '',
   
    dueDate: '',
    labels: '',
  });
   
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit=(e)=>{
      e.preventDefault()


      fetch(`https://newtask-v32e.onrender.com/task/create-task`,{
        method:"POST",
        headers:{
            "Content-type":"application/json",
             "Authorization":localStorage.getItem("token")
        },
        body:(JSON.stringify(taskData))
      }).then((res)=>res.json()).then((res)=>{ 
         
        if (res.message === "task is create") {
          toast({
                 title: "task is create",
               
                 status: "success",
           
          })
        }
       
      
      
      })


      navigate("/")
  }
  

 


  return (
    <VStack >
     
       <Heading>Create New Task</Heading>
        <form onSubmit={handleSubmit} style={{width:"30%"}}>
        <FormLabel>
          Task Name:
          <Input
            type="text"
            name="taskName"
            value={taskData.taskName}
            onChange={handleChange}
            required
            
            borderWidth='2px' 
            bg='pink.100'
          />
        </FormLabel>
        <FormLabel>
          Description:
          <Textarea 
            name="description"
            value={taskData.description}
            onChange={handleChange}
            rows={4}
            borderWidth='2px' 
            bg='pink.100'
          />
        </FormLabel>
        <FormLabel>
          Checklist:
          <Textarea 
            name="checklist"
            value={taskData.checklist}
            onChange={handleChange}
            rows={4}
            borderWidth='2px' 
            bg='pink.100'
          />
        </FormLabel>
        <FormLabel>
          Comments:
          <Textarea 
            name="comments"
            value={taskData.comments}
            onChange={handleChange}
            rows={4}
            borderWidth='2px' 
            bg='pink.100'
          />
        </FormLabel>
        <FormLabel>
          Project List:
          <Input
            type="text"
            name="projectList"
            value={taskData.projectList}
            onChange={handleChange}
            borderWidth='2px' 
            bg='pink.100'
          />
        </FormLabel>
        
        <FormLabel>
          Due Date:
          <Input
            type="date"
            name="dueDate"
            value={taskData.dueDate}
            onChange={handleChange}
            borderWidth='2px' 
            bg='pink.100'
          />
        </FormLabel>
        <FormLabel>
          Labels:
          <Input
            type="text"
            name="labels"
            value={taskData.labels}
            onChange={handleChange}
            borderWidth='2px' 
            bg='pink.100'
          />
        </FormLabel>
        <Button type="submit" colorScheme='blue' size='lg' padding={'0px 130px'}>Create Task</Button>
      

       </form>
      
    </VStack>
  )
}

export default CreateTask
