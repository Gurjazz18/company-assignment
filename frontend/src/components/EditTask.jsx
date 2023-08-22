import { useState } from "react"

import{Input,Button,Box}  from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom';

const EditTask = ({id,setLoad}) => {
      
    
    const[edit,setEdit]=useState()

    const HandleEdit=()=>{

          fetch(`https://newtask-v32e.onrender.com/task/task-update/${id}`,{
            method:"PATCH",
            headers:{
                "Content-type":"application/json",
                "Authorization":localStorage.getItem("token")
            },
            body:(JSON.stringify({comments:edit}))
          }).then((res)=>res.json()).then((res)=>{ 
           
          
          
          })


         setLoad(prev=>!prev)

    }


  return (
    <Box>
    <form className='editpagecsss'
         onSubmit={HandleEdit} 
        
         >

         <Button variant='solid' colorScheme='blue'
            width="40%" 
            marginBottom={5}
            onClick={()=>HandleEdit()}>
             change comments
         </Button>
        
          
          <Input 
             placeholder='Change the comments.....'
             onChange= {(e)=>setEdit(e.target.value)} 
             value={edit} 
             border={'1px solid black'}  
             width="100%" 
          />
          
      
     </form>
       
       
    </Box>
  )
}

export default EditTask
