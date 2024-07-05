import React from 'react'
import { BrowserRouter,Navigate, Route, Routes } from 'react-router-dom'
import Main from './components/Main/Main'
import Main1 from './components/Main/Main1'
import Register from './components/Register/Register'
import Login from './components/Register/Login'
import { useState,useEffect } from "react";
import { auth } from "./firebase";


const App = () => {

  const [user,setUser] = useState(null);
  useEffect(()=> {
      const unsubscribe = auth.onAuthStateChanged((user) => {
          if(user) {
              setUser(user)
          } else{
              setUser(null)
          }
      })
      return unsubscribe
  },[])

  return (
    <BrowserRouter>
     <Routes> 
      <Route path='/' element={<Register/>} user={user}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/main' element={user ? <Main/> : <Navigate to='/'/>} />
      <Route path='/main/:id' element={<Main1/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App