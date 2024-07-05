import React, { useEffect } from 'react'
import About from '../Pages/About'
import Home from '../Pages/Home'
import Profile from '../Pages/Profile'

const Main1 = () => {
  return (
    <>
     <main className='dark:bg-black h-[100%]'>
     <About/>
     <div className='flex  justify-center'>
        <Home/>
        <Profile/>
     </div>
     </main>
    </>
  )
}

export default Main1