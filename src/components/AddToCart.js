import {useState,useEffect} from 'react'
import axios from 'axios'
import AuthService from '../services/auth.service.js'
import Modal from './Modal.js'

const AddToCart = ({id,productQuantity,productPrice}) => {
  
  useEffect(() => {
    let user = AuthService.getCurrentUser()
    if(user){
      setCurrentUser(user)
    }
  }, [])

  const[currentUser,setCurrentUser] = useState()
  const [modal, setModal] = useState(false);
  const addToCart = async(id,productQuantity,productPrice)=>{
    
    let user = AuthService.getCurrentUser()
    if(user){
      let cartItem ={
        userId:user.id,
        productId:id,
        quantity:productQuantity,
        totalPrice:productQuantity * productPrice
      }
     
      const res= await axios.post("http://localhost:8084/addtoCart",cartItem).catch(err=>alert("already in a cart"))
      
    }


   
  }

  return (
    <>
    {currentUser?(<button
            onClick={()=>{
              
              addToCart(id,productQuantity,productPrice)
            }}
                        >
                Add To Cart      
    </button>):(<button
               onClick={()=>setModal(true)}
                        >
                      Add To Basket
    </button>)}
     
     {modal && <Modal setModal={setModal}/>}
  </>
  )
}

export default AddToCart