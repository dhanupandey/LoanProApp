import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Navbar from './Navbar'
import Signup from './Signup'


export default function Router() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
           
          </Routes>
        </BrowserRouter>
      </>
    )
  }