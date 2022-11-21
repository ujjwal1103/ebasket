import {  useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../redux/actions/productActions";
import AuthService from "../services/auth.service.js";
import CartItem from "../components/CartItem.js";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    let user = AuthService.getCurrentUser();
    if (user) {
     dispatch(fetchCart(user.id));
      
    }
  }, []);

  

  return (
    <div className=" flex  flex-col  w-full height mx-20">
      <div className="flex items-center justify-between py-4 my-10 ">
        <h1 className="text-5xl font-bold font-sans dark:text-white">Grocery basket</h1>
        <span className="font-2xl">{cartItems?.length} Items in basket</span>
      </div>
      <div className="flex bg-white dark:bg-slate-700 dark:text-white
      p-4 shadow-xl gap-5 w-full ">
       
        <div className=" border w-[100%]">
          <div className="flex mb-3 bg-white dark:bg-slate-700  justify-between  items-center p-4">
            <span className="lg:pl-12">Product</span>
            
            <span className="lg:pl-48">Quantity</span>
            <span className="lg:pr-8">Price</span>
            <span className="lg:pl-12 lg:pr-40">Total Price</span>
            </div>
          <Scrollbars style={{ width: "100%", height: 300 }}>
            
              {cartItems.length !== 0?(
                <div className="flex flex-col my-2">
                {cartItems?.map((item,index) => (
                  <CartItem item={item} key={index} />
                ))}
              </div>):(<div className="flex justify-center items-center h-[300px] text-4xl font-sans">No Items in cart</div>)}
            
          </Scrollbars>
        
          <div className="flex gap-3 items-center mx-12 py-4"><button  className="bg-blue-600 py-3 px-2 text-white rounded hover:text-white" onClick={()=>window.history.back()}>Continue Shopping</button></div>
          
        </div>
        {cartItems.length !== 0 && <div className=" flex flex-col justify-end w-[30%] p-4 border">
          <div className="flex gap-3 items-center justify-end py-4">
            <span>Total Price: </span>
            <span>₹ {cartItems?.reduce((val,item)=>{return item.totalPrice + val},0)}</span>
          </div>
          <div className="flex gap-3 items-center justify-end py-4">
            <span>Discount:</span>
            <span>₹ { 
           (cartItems?.reduce((val,item)=>{return item.totalPrice + val},0)) > 500 ? (Math.round((cartItems?.reduce((val,item)=>{return item.totalPrice + val},0) * 10)/100)): 0

           }
    
            
            
            
            
             </span>
          </div>
          <div className="flex gap-3 items-center justify-end py-4 ">
            <span>Total:</span>
            <span>₹ {
            
            
           (cartItems?.reduce((val,item)=>{return item.totalPrice + val},0)) > 500 ? Math.abs(Math.round(((cartItems?.reduce((val,item)=>{return item.totalPrice + val},0) * 10)/100)) - cartItems?.reduce((val,item)=>{return item.totalPrice + val},0)): cartItems?.reduce((val,item)=>{return item.totalPrice + val},0)

           }</span>
          </div>
          <div className="flex gap-3 items-center justify-end py-4"><button className="bg-blue-600 py-3 px-2 text-white rounded w-[63%]">Make Purchase</button></div>
        </div>}
      </div>
    </div>
  );
};

export default Cart;
