import React, { useEffect, useState } from 'react';
import { Card, Image, CardBody,useToast, CardFooter,Stack,Heading,Text,Center,Button } from '@chakra-ui/react'

import EditTask from './EditTask';

const Home = () => {

    const[todo,setTodo]=useState([])
    const toast = useToast();

    const[load,setLoad]=useState("false")

       useEffect(()=>{

        fetch(`https://newtask-v32e.onrender.com/task/get-task`,{
         
          headers:{
            "Authorization":localStorage.getItem("token")
          }

        }).then((res)=>res.json()).then((res)=>{ 
         
           setTodo(res.taskList)
        
        })
  
       },[load])

       const handleDelete=(id)=>{

        fetch(`https://newtask-v32e.onrender.com/task/task-delete/${id}`,{
            method:"DELETE",
            headers:{
               
                "Authorization":localStorage.getItem("token")
            },
           
          }).then((res)=>res.json())
          .then((res)=>{ 
           
            if (res.message === "Item is Deleted") {
                toast({
                       title: "Item is Deleted",
                     
                       status: "success",
                 
                })
              }
          
          })
          

          setLoad(prev=>!prev)
        
       }

      
       if(!localStorage.getItem("token")){

        return(
            <Center>
                <Heading>Login Please</Heading>
            </Center>
        )
      }
      
  
  return (
    <>

 

    {


        todo.length>0 && todo.map((elem)=>(


            <Card
             direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
             variant='outline'
             key={elem._id}
    
  >
    <Image
      objectFit='cover'
      width={"300px"}
      src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
      alt='title'
    />

    

        
            <Stack >

         <CardBody>
         
         <Heading size='md'>TaskName: {elem.taskName}</Heading>
  
         <Text py='2'>
         Description: {elem.description}
         </Text>

         <Text py='2'>
         ProjectList: {elem.projectList}
         </Text>

         <Text py='2'>
          DueDate :{elem.dueDate}
         </Text>

         <Text py='2'>
           comments :{elem.comments}
         </Text>
          

         <Heading size='md'> {elem.Username}</Heading>

         </CardBody>
  
         <CardFooter 
           display="flex"
           flex-direction="column"
           gap={10}
          justifyContent="space-between"
        
         >
         <Button variant='solid' colorScheme='blue'  width="20%" 
          onClick={()=>handleDelete(elem._id)}>
          Delete
         </Button>
        
          <EditTask id={elem._id} 

           setLoad={setLoad}
            
           />
         
      </CardFooter>

      
             </Stack>


    


  
    



    </Card>
        ))
    }

    </>
  )
}

export default Home
