import React from 'react'
import Slider from 'react-slick'
import Products from '../All-Projucts/Products'
// import SimpleSlider from '../HeroSlider/Slider'


const Home = () => {
  return (
   <>

<div className='h-[300px] w-full bg-cyan-900  overflow-x-hidden-hidden mt-5 flex items-center justify-evenly dark:bg-black dark:text-white p-[100px] rounded-2xl'>
  <div >
   
    <h1 className='text-5xl'>Khridi lo kush</h1>
    <p className='text-9xl'> Garebo</p>
  </div>
  <div>
    <img src="https://officialpsds.com/imageview/rm/99/rm99jy_large.png?1521316516" className='h-[300px]' alt="" />
  </div>
</div>
<div>
 
  <Products/>
</div>
  

   </>
  )
}

export default Home