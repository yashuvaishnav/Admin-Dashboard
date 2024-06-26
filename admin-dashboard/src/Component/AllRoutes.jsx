
import React from 'react'
import { Routes, Route } from "react-router-dom";
import { AdminDashboard } from './AdminDashboard';
import {SignUp} from '../Pages/Signup';
import { Login } from '../Pages/Login';


export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/admindashboard" element={<AdminDashboard />} />
    </Routes>
  )
}
