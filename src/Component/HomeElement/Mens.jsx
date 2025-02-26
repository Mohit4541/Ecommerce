import React from 'react'
import { useSelector } from 'react-redux';
import CartButton from "../Uiverse/Cartbtn";

const Mens = () => {
  let {products} = useSelector((data)=>{return data.MyProducts})
    console.log(products)

    let Mens = products.filter((item)=>{
      return item.main_category == "Men's Wear"
      
    }) 
  return (
    <div className='my-5'>
      <h2 className="text-2xl font-bold text-center mb-6 ">Men's Fashion</h2>
      <div className='flex  justify-center flex-wrap gap-4'>
        {Mens.map((item)=>(
         <div key={item.id} className="border p-4   text-center rounded-2xl dark:bg-slate-400 dark:text-white">
           <img src={item.image} alt={item.name} className="w-[] h-[150px] mx-auto object-contain" />
           <h4 className="mt-2 font-semibold">{item.name}</h4>
           <div className="flex justify-evenly items-center">
                <p className="text-green-600 font-bold">${item.price}</p>
                <CartButton />
              </div>


         </div>
        ))}
      </div>
    </div>
  )
}
  

export default Mens