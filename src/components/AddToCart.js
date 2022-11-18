import React from 'react'
import axios from 'axios'
import AuthService from '../services/auth.service.js'
const AddToCart = ({id,productQuantity,productPrice}) => {

  const addToCart = async(id,productQuantity,productPrice)=>{
    
    let user = AuthService.getCurrentUser()
    if(user){
      let cartItem ={
        userId:user.id,
        productId:id,
        quantity:productQuantity,
        totalPrice:productQuantity * productPrice
      }
     
      await axios.post("http://localhost:8084/addtoCart",cartItem)
      .then(()=>alert("product is added to cart"))
      window.location.reload()
    }


   
  }

  return (
    <button className="rounded-tl-xl 
                       rounded-tr-xl  
                       mt-2 font-bold py-2 
                       px-3 text-white
                        bg-blue-500 
                        text-center"
            onClick={()=>{
              addToCart(id,productQuantity,productPrice)
            }}
                        >
                      Add To Basket
    </button>
  )
}

export default AddToCart