import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Detail = () => {
  let id = useParams().id
  let { products } = useSelector((data) => {
    console.log(data.MyProducts)
    return data.MyProducts
  })

  let product = products.filter((item) => {
    console.log(item)
    return item.productId == id
  })

  return (
    <div className='my-5 dark:bg-black rounded-2xl py-[50px]'>
      <h2 className="text-2xl font-bold text-center mb-6  dark:text-white underline">Dtail Page</h2>
      <div className='flex  justify-center flex-wrap gap-4'>
        {product.map((item)=>(
         <div key={item.id} className="border p-4   text-center rounded-2xl dark:bg-white ">
           <img src={item.image} alt={item.name} className="w-[] h-[150px] mx-auto object-contain" />
           <h4 className="mt-2 font-semibold">{item.name}</h4>
           <div className="flex justify-evenly items-center">
                <p className="text-green-600 font-bold">${item.price}</p>
                {/* <CartButton /> */}
             
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

export default Detail