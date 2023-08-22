
import React from 'react'
import { Link } from 'react-router-dom'
import { Flex } from '@chakra-ui/react';

const Navbar = () => {

  return (
    <Flex  justifyContent={'space-evenly'} bgColor={'black'} color={'white'} p={3}>
     <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/register">SingUp</Link>
    <Link to="/create-task">CreateTask</Link>
      
    </Flex>
  )
}

export default Navbar
