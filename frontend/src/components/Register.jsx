

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  useToast
 
} from '@chakra-ui/react'
import { useState } from 'react'


import axios from "axios"


export default function Register() {

  const toast = useToast();

  const[state,setState]=useState({
    name:"",
    email:"",
    password:""
  })

  const handleSubmit=async(e)=>{
    e.preventDefault()
   
     
    
    await axios("https://newtask-v32e.onrender.com/user/register", {
      method: "POST",
      data: state,
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => {
      
      if (res.data.message === 'User registered successfully') {
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
         
        });
       
      } else {
        toast({
          title: "Acount has been Already Regestered.",
          description: "Please Login to account or Create with new Email",
          status: "error",
          
        });
      }
   





     

    }).catch((err)=>{
      console.log(err)
    })



  setState({
    name:"",
    email:"",
    password:""
  })


}

  const handleChanege=(e)=>{

    const {value,name}=e.target

    setState({...state,[name]:value})

  }


  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          User Registration Form 
        </Heading>

         <form onSubmit={handleSubmit} id='form-clear'>

        <FormControl id="userName" isRequired>
          <FormLabel>User name</FormLabel>
          <Input
            placeholder="UserName"
            autoComplete="off"
            type="text"
            required 
            value={state.name}
            onChange={handleChanege}
            name="name"
           
          />
        </FormControl>

        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="Email"
            autoComplete="off"
            type="email"
            required 
            value={state.email}
            onChange={handleChanege}
            name="email"
            
          />
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="Password"
            
            type="password"
            autoComplete="off"
            required 
            value={state.password}
            onChange={handleChanege}
            name="password"
          />
        </FormControl>

        <Stack spacing={6} direction={['column', 'row']}>
          
          <Button
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
              
            }}

            type="submit"
            
            >
            Submit
          </Button>
        </Stack>

        </form>




      </Stack>
    </Flex>
  )
}