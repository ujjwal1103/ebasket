import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
const CartItem = ({item}) => {
    const [product,setproduct]=useState("")
    const [quantity,setQuantity]=useState(item.quantity);
    
  useEffect(() => {
    if(item.productId){
       axios.get(`http://localhost:8084/product/${item.productId}`).then(res=>{setproduct(res.data)})
    }
  }, [item.productId])
  
  

  const updateItems=(id)=>{
  console.log(id);
      let cart={
        quantity:quantity,
        totalPrice:quantity*product.price
      }
      console.log(cart)
  }

  const deleteItem =async(id)=>{
   await axios.delete(`http://localhost:8084/item/${id}`).then(()=>{alert("item deleted")})
   window.location.reload()

  }
  return (
    <div className="flex mb-3 bg-white gap-2 justify-between rounded-md items-center p-2">
                  <img src={product?.image} alt="" className="mx-8 border w-20 h-20" />
                  <span className="mx-3 w-52">{product?.title}</span>
                  <div className=" border-2 rounded-lg border-blue-800  bg-blue-800 text-white flex items-center  ">
                    <button
                      className=" px-4 text-white font-bold text-2xl"
                      onClick={ (e) => {
                        if(quantity > 1 ){
                          setQuantity(pre=>pre-1)
                          updateItems(item.id)
                        }
                        else{
                           axios.delete(`http://localhost:8084/item/${item.id}`).then(()=>{alert("item deleted")})
                           window.location.reload()
                        }
                        
                      }}
                    >
                      -
                    </button>
                    <span className="p-2 text-white font-bold">{quantity}</span>
                    <button
                      className=" px-4 text-white font-bold text-2xl"
                      onClick={ (e) => {
                        if(quantity >= 1 ){
                          setQuantity(pre=>pre+1)
                          updateItems(item.id)
                        }
                        
                      }}
                    >
                      +
                    </button>
                  </div>
                  <span className="w-52 text-center">{product.price}</span>
                  <span className="w-52 text-center">{item.totalPrice}</span>
                  <button className="px-5" onClick={()=>deleteItem(item.id)}>Remove</button>
    </div>
  )
}

export default CartItem