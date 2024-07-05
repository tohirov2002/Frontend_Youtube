import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Sidebar1 from '../Sidebar1/Sidebar1'
import HamLeft from '../Pages/HamLeft'

const Main = () => {
  return (
    <main className='flex relative'>
        <HamLeft/>
        <Sidebar/>
        <Sidebar1/>
    </main>
  )
}

export default Main