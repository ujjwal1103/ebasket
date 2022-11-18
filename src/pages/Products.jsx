import axios from "axios";
import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import "../components/sidebar.css";
import { useParams, Link } from "react-router-dom";

const Products = ({query}) => {
  
  const [product, setProduct] = useState([]);
  const { category } = useParams();
  const loadAllProducts = async () => {
    await axios
      .get(`http://localhost:8084/product/productbycategory/${category}`)
      .then((res) => setProduct(res.data));
  };
  useEffect(() => {
    loadAllProducts();
  }, [category]);

  return (
    <div className="flex ">
      <Sidebar/>
      <div className="grid grid-cols-5  grid-flow-row gap-8 p-16 ">
        {/* <Filter /> */}
        {product.filter(item=>item.title.toLowerCase().includes(query)||item.category.toLowerCase().includes(query))?.map((pro, index) => {
         
               return (
            <Link
              to={`/product/${pro.id}`}
              className=" rounded-md shadow-md flex flex-col items-center h-[289px] w-[200px] bg-white"
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
              <h2 className="text-2xl text-center font-bold">{pro.title}</h2>
              <span className="">₹ {pro.price}</span>
              <span className="line-through text-gray-400">
                ₹ {Math.round(pro.price + (pro.price * 12) / 100)}
              </span>
              <button className="rounded-tl-xl rounded-tr-xl mt-2 font-bold py-2 px-3  text-white bg-blue-500 text-center">
                Add To Basket
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
