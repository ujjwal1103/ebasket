import React from "react";
import WhyBigbasket from "../components/WhyBigbasket";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import AddToCart from "../components/AddToCart";
const SingleProduct = () => {
  const [product, setproduct] = useState();
  let [addquantity, setQuantity] = useState(1);

  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8084/product/${id}`).then((res) => {
      setproduct(res.data).catch((err) => {
        console.log(err);
      });
    });
  }, [id]);

  const increment = () => {
    if (addquantity >= 1) setQuantity((addquantity += 1));
  };
  const decrement = () => {
    if (addquantity > 1) setQuantity((addquantity -= 1));
  };

  return (
    
      <div className="flex dark:bg-gray-800 w-full  lg:py-16 height ">
        <div className="flex  lg:mx-16 lg:shadow-xl lg:shadow-gray-500 w-full flex-col lg:flex-row">
          <div className="lg:rounded-lg lg:m-12 bg-white w-full border-2 flex felx-1 justify-center items-center mt-5 lg:mt-0">
            <img
              src={product?.image}
              alt={product?.title}
              className="w-96 transition duration-300 ease-in-out lg:hover:scale-110 object-contain h-full"
            />
          </div>
          <div className="flex flex-col justify-between  lg:m-12 w-full dark:text-white  p-2">

            <div className="flex-1  p-5">

            <div className="text-blue-400 mb-4 m-2">
              Home/Products/{product?.title}
            </div>
            <h2 className="text-2xl font-normal m-2 mb-4">{product?.title}</h2>

            <div className="m-2 mb-4 ">
              <span className="text-2xl font-extrabold">{product?.price}</span>
              <span className="line-through text-slate-400 mx-3">
                ₹{product?.price + Math.floor((product?.price * 10) / 100)}
              </span>
            </div>
            <div className="m-2 mb-4 ">
              <span className="text-2xl font-extrabold">{product?.unit}</span>
            </div>

            <div className="m-2 mb-4">
              <p className="text-justify">{product?.description}</p>
            </div>
            <div className="m-2 mb-4 flex gap-4 items-center">
              {product?.quantity === 0 ? (
                <span className=" text-red-600 font-bold text-2xl">
                  Out of Stock
                </span>
              ) : (
                <div
                  className=" 
                      border-2 rounded-lg border-blue-800  bg-blue-800 text-white flex items-center px-4 py-2"
                >
                  <AddToCart
                    id={product?.id}
                    productQuantity={addquantity}
                    productPrice={product?.price}
                  />
                </div>
              )}
              {product?.quantity > 0 && (
                <div className=" border-2 rounded-lg border-blue-800  bg-blue-800 text-white flex items-center  ">
                  <button
                    className=" px-4 text-white font-bold text-2xl"
                    onClick={() => decrement()}
                  >
                    -
                  </button>
                  <span className="p-2 text-white font-bold">
                    {addquantity}
                  </span>
                  <button
                    className=" px-4 text-white font-bold text-2xl"
                    onClick={() => increment()}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
            </div>
            <WhyBigbasket />
          </div>
        </div>
      </div>
  
  );
};

export default SingleProduct;
