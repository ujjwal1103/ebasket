import React from "react";

import AddToCart from "../components/AddToCart";
import { Link } from "react-router-dom";

const Card = ({ pro }) => {
  return (
    <div
      className="rounded-lg shadow-xl flex  flex-col items-center h-[329px]  mx-12 lg:mx-0   bg-white"
      key={pro.id}
    >
      <Link
        to={`/product/${pro.id}`}
        className=" rounded-md  flex flex-col  items-center h-full   w-full bg-white"
        key={pro.id}
      >
        <span className="bg-blue-600 text-white text-center py-2 w-[80px] self-end rounded-tr-md rounded-bl-md">
          {Math.floor(Math.random() * (15 - 5) + 5)}% off
        </span>
        <img
          src={pro.image}
          alt={pro.title}
          className="w-[140px] transition-all duration-300 hover:scale-105 object-contain rounded-full"
        />
        <h2 className="text-2xl  text-center font-bold">{pro.title}</h2>
        <span className="">₹ {pro.price}</span>
        <span className="line-through text-gray-400">
          ₹ {Math.round(pro.price + (pro.price * 12) / 100)}
        </span>
      </Link>
      <div>
        {pro?.quantity === 0 ? (
          <span className="rounded-tl-xl rounded-tr-xl  mt-2 font-bold py-2 px-3 text-red-600  text-center">
            Out of Stock
          </span>
        ) : (
          <div
            className="lg:rounded-tl-xl 
      lg:rounded-tr-xl  
      mt-2 font-bold py-2 
      px-3 text-white
       
       bg-blue-500 
       text-center"
          >
            <AddToCart
              id={pro?.id}
              productQuantity={1}
              productPrice={pro?.price}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
