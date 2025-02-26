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
      <div className="p-5  ">
        <h2 className="text-2xl font-bold text-center mb-6 ">Products</h2>
        <div className="grid grid-cols-4 gap-5 ">
          {products.map((product) => (
            <div key={product.id} className="border p-4   text-center rounded-2xl dark:bg-slate-400 dark:text-white ">
              <img src={product.image} alt={product.name} className="w-[] h-[150px] mx-auto object-contain" />
              <h4 className="mt-2 font-semibold">{product.name}</h4>
              <div className="flex justify-evenly items-center">
                <p className="text-green-600 font-bold">${product.price}</p>
               <CartButton />
              </div>
              {/* <button  className="border px-2 bg-[#00bc7d] font-bold rounded-2xl cursor-pointer ">Add To Cart</button> */}

              <button className='border border-amber-300 px-3 py-2'>

                <NavLink to={`/Detail/${product.id}`}>

                  Show Details
                </NavLink>
              </button>
            </div>
          ))}

        </div>

      </div>
    </>
  );
};

export default Products;
