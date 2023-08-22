
import React from 'react'
import {
   
    Routes,
    Route,
  } from "react-router-dom";
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import CreateTask from '../components/CreateTask';


const AllPages = () => {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/create-task" element={<CreateTask/>} />
   
    
      
    </Routes>
  )
}

export default AllPages