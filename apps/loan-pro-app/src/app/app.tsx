import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Signup from './Components/Signup'

export function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar isLogged={false}/>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
           
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
