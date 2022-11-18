import React from "react";
import WhyBigbasket from "../components/WhyBigbasket";
import {useParams} from "react-router-dom"
import { useState,useEffect } from "react";
import axios from "axios";
import AddToCart from "../components/AddToCart";
const SingleProduct = () => {
  const [product,setproduct]=useState()
  let [addquantity,setQuantity] = useState(1);
  
  const {id}= useParams()
  useEffect(() => {
      axios.get(`http://localhost:8084/product/${id}`).then(res=>{setproduct(res.data).catch(err=>{console.log(err)})})
  }, [addquantity])

  const increment=()=>{
    if(addquantity >= 1 ) setQuantity(addquantity+=1)
  }
  const decrement=()=>{
    if(addquantity > 1) setQuantity(addquantity-=1)
  }

  
  return (
    <>
      
      
      <div className="flex bg-white h-screen height">
        
        <div className="rounded-lg m-12 w-full border-2 flex felx-1 justify-center items-center">
          <img src={product?.image} alt={product?.title} className="w-96 transition duration-300 ease-in-out hover:scale-110 object-contain h-full" />
        </div>
        <div className="m-12 w-full ">
          <div className="text-blue-400 mb-4 m-2">Home/Products/{product?.title}</div>
          <h2 className="text-2xl font-normal m-2 mb-4">
            
            {product?.title}
          </h2> 
          <div className="m-2 mb-4">
            <span>rating</span>
          </div>
          <div className="m-2 flex gap-2 mb-4">
            <div className=" border border-blue-800 flex items-center justify-center p-4 gap-2 rounded-lg mb-4">
              <input type="radio" name="quntity" id="" />
              <span className="">500 g</span>
            </div>
            <div className="border border-blue-800 flex items-center justify-center p-4 gap-2 rounded-lg mb-4">
              <input type="radio" name="quntity" id="" />
              <span className="">1 kg</span>
            </div>
          </div>
          
          <div className="m-2 mb-4 flex gap-2 items-center">
         
              {product?.quantity === 0 ? (<span className=" text-red-600 font-bold text-2xl">Out of Stock</span>):(<AddToCart id={product?.id} productQuantity={addquantity} productPrice={product?.price}/> )}
             
            {product?.quantity > 0 && <div className=" border-2 rounded-lg border-blue-800  bg-blue-800 text-white flex items-center  ">
               <button className=" px-4 text-white font-bold text-2xl" onClick={()=>decrement()}>-</button>
               <span className="p-2 text-white font-bold">{addquantity}</span>
               <button className=" px-4 text-white font-bold text-2xl" onClick={()=>increment()}>+</button>
            </div>}
          </div>
          <div className="m-2 mb-4 ">
            <span className="text-2xl font-extrabold">{product?.price}</span>
            <span className="line-through text-slate-400 mx-3">₹{product?.price + Math.floor((product?.price*10)/100)}</span>
          </div>
          <div className="m-2 mb-4">
            <p className="text-justify">
               {product?.description}
            </p>
          </div>
          <WhyBigbasket />
        </div>
      </div>
     
    </>
  );
};

export default SingleProduct;
