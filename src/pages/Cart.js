import { useState, useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../redux/actions/productActions";
import AuthService from "../services/auth.service.js";
import CartItem from "../components/CartItem.js";
import { Link } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  
  const dispatch = useDispatch();
  const [totalCartPrice,setTotalCartPrice] = useState(0)
  useEffect(() => {
    let user = AuthService.getCurrentUser();
    if (user) {
     dispatch(fetchCart(user.id));
     
    }
  }, []);

  

  return (
    <div className=" flex  flex-col height w-[100%] mx-20">
      <div className="flex items-center justify-between py-4 my-10 ">
        <h1 className="text-5xl font-bold font-sans">Grocery basket</h1>
        <span className="font-2xl">{cartItems?.length} Items in basket</span>
      </div>
      <div className="flex bg-white p-4 shadow-xl gap-5 w-full ">
       
        <div className=" border w-[100%]">
          <div className="flex mb-3 bg-white  justify-between rounded-md items-center p-4">
            <span className="lg:pl-12">Product</span>
            
            <span className="lg:pl-48">Quantity</span>
            <span className="">Price</span>
            <span className="lg:pl-12 lg:pr-40">Total Price</span>
            </div>
          <Scrollbars style={{ width: "100%", height: 300 }}>
            
              {cartItems.length !== 0?(<div className="flex flex-col my-2">
                {cartItems?.map((item,index) => (
                  <CartItem item={item} key={index} />
                ))}
              </div>):(<div className="flex justify-center items-center h-[300px] text-4xl font-sans">No Items in cart</div>)}
            
          </Scrollbars>
        
          <div className="flex gap-3 items-center mx-12 py-4"><button className="bg-blue-600 py-3 px-2 text-white rounded ">Continue Shopping</button></div>
          
        </div>
        <div className=" flex flex-col justify-end w-[30%] p-4 border">
          <div className="flex gap-3 items-center justify-end py-4">
            <span>Total Price: </span>
            <span>₹ {cartItems?.reduce((val,item)=>{return item.totalPrice + val},0)}</span>
          </div>
          <div className="flex gap-3 items-center justify-end py-4">
            <span>Discount:</span>
            <span>₹ {cartItems?.reduce((val,item)=>{return item.totalPrice + val},0) % 20 }</span>
          </div>
          <div className="flex gap-3 items-center justify-end py-4 ">
            <span>Total:</span>
            <span>₹ {(cartItems?.reduce((val,item)=>{return item.totalPrice + val},0)) - cartItems?.reduce((val,item)=>{return item.totalPrice + val},0) % 20}</span>
          </div>
          <div className="flex gap-3 items-center justify-end py-4"><button className="bg-blue-600 py-3 px-2 text-white rounded w-[63%]">Make Purchase</button></div>
        </div>
      </div>
    </div>
  );
};

export default Cart;