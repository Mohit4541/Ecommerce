import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { use } from "react";
import CartButton from "../Uiverse/Cartbtn";


const Products = () => {
  const [products, setProducts] = useState([]);

  let data = useSelector((data) => {
    return data.MyProducts
  })
  console.log(data)
  useEffect(() => {
    setProducts(data.products)
  }, [data])
  // useEffect(() => {
  //   const fetchProducts = async () => {

  //     const response = await axios.get("https://fakestoreapi.com/products");
  //     setProducts(response.data);
  //     // console.log(response);

  //   };

  //   fetchProducts();
  // }, []);



  return (
    <>
      <div className="my-5 dark:bg-black rounded-2xl py-[50px]">
        <h2 className="text-2xl font-bold text-center mb-6  dark:text-white">Products
        </h2>
        <div className="flex  justify-center flex-wrap gap-4 ">
          {products.map((product) => (
            <div key={product.id} className="border p-4   text-center rounded-2xl dark:bg-white ">
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
                <button className="border-2 px-[15px] py-[5px] bg-gray-300 cursor-pointer">Add To Cart</button>
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
