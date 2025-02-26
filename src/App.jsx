import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import { Outlet } from 'react-router-dom'
import ChangeTheam from './Component/Uiverse/Darkmood'
import Footer from './Component/Footer'


function App() {

 
  

  return (
    <>
    <div className='absolute bg bottom-[50px] right-[50px]'>

< ChangeTheam />
    </div>
      <Header/>
    <Outlet/>
    <Footer/>





    
    
    </>
  )
}

export default App
