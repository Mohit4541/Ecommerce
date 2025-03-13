import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Mens = () => {
  let { products } = useSelector((data) => { return data.MyProducts })
  console.log(products)

  let Mens = products.filter((item) => {
    return item.main_category == "Men's Wear"

  })
  return (
    <div className='my-5 dark:bg-black rounded-2xl py-[50px]'>
      <h2 className="text-2xl font-bold text-center mb-6  dark:text-white underline">Men's Fashion</h2>
      <div className='flex  justify-center flex-wrap gap-4'>
        {Mens.map((item) => (
          <div key={item.id} className="border p-4   text-center rounded-2xl dark:bg-white ">
            <img src={item.image} alt={item.name} className="w-[] h-[150px] mx-auto object-contain" />
            <div>
              <h4 className="mt-2 font-semibold">{item.name}</h4>
            </div>
            <div className="flex justify-evenly items-center">
              <p className="text-green-600 font-bold">${item.price}</p>
              {/* <CartButton /> */}
              <NavLink to={`/detail/${item.productId}`}>
                <button className="cursor-pointer hover:text-blue-900 hover:font-bold px-[10px]">  Detail... </button>
              </NavLink>
            </div>
            <div className="flex justify-between gap-[15px]">
              <button className="border-2 px-[15px] py-[5px] bg-gray-300 cursor-pointer">Add To Cart</button>
              <button className="border-2 px-[15px] py-[5px] bg-gray-300 cursor-pointer">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export default Mens