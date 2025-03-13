import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../Store/Slice/CartSlice";
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from "react-toastify";


const Products = () => {
  const [products, setProducts] = useState([]);

  let data = useSelector((data) => {
    return data.MyProducts
  })
  console.log(data)
  useEffect(() => {
    setProducts(data.products)
  }, [data])

  const notify = () => {
    toast("Item Added Succesfully")
  }

  const Dispatch = useDispatch();

  return (
    <>
      <div className="my-5 dark:bg-black rounded-2xl py-[50px]">
        <h2 className="text-2xl font-bold text-center mb-6  dark:text-white underline">Products
        </h2>
        <div className="flex  justify-center flex-wrap gap-4 ">
          {products.map((product) => (
            <div key={product.productId} className="border p-4   text-center rounded-2xl dark:bg-white ">
              <img src={product.image} alt={product.name} className="w-[] h-[150px] mx-auto object-contain" />
              <div>
                <h4 className="mt-2 font-semibold">{product.name}</h4>
              </div>
              <div className="flex justify-evenly items-center">
                <p className="text-green-600 font-bold">${product.price}</p>

                <NavLink to={`/detail/${product.productId}`}>
                  <button className="cursor-pointer hover:text-blue-900 hover:font-bold px-[10px]">  Detail... </button>
                </NavLink>
              </div>
              <div className="flex justify-between  gap-[15px] mt-[5px]">

                <div onClick={notify}>
                  <button onClick={() => {
                    Dispatch(addtoCart(product))
                  }} className="border-2 px-[15px] py-[5px] bg-gray-300 cursor-pointer" >    Add To Cart</button>
                  <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition={Bounce}
                  />

                </div>
                <button className="border-2 px-[15px] py-[5px] bg-gray-300 cursor-pointer">Buy Now</button>
              </div>
            </div>
          ))}

        </div>

      </div>
    </>
  );
};

export default Products;
