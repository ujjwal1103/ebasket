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
     
      const res= await axios.post("http://localhost:8084/addtoCart",cartItem)
      if(res){
        window.location.reload()
      }
    }


   
  }

  return (
    <>
    <button
            onClick={()=>{
              addToCart(id,productQuantity,productPrice)
            }}
                        >
                      Add To Basket
    </button>
    
  </>
  )
}

export default AddToCart