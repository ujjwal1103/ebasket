import { useState, useEffect } from "react";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import axios from "axios";
const CartItem = ({ item }) => {
  const [product,setproduct] = useState()
  const [qunatity,setQuantity] = useState(item.quantity)
  useEffect(() => {
    if (item.productId) {
      axios
        .get(`http://localhost:8084/product/${item.productId}`)
        .then((res) => {
          setproduct(res.data);
        });
    }
  }, [item.productId]);

  

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:8084/item/${id}`)
    window.location.reload();
  };
  return (
    <div className="flex mb-3 bg-white dark:bg-slate-700 gap-2 justify-between items-center p-2  border-y-2">
      <img src={product?.image} alt="" className="mx-8 border w-20 h-20" />
      <span className="mx-3 w-52">{product?.title}</span>
      <div className="  rounded-lg   flex items-center  ">
        
        <span className="p-2 font-bold">{item.quantity}</span>
        
      </div>
      <span className="w-52 text-center">{product?.price}</span>
      <span className="w-52 text-center">{item.totalPrice}</span>
      <button className="px-5 text-2xl" onClick={() => deleteItem(item.id)}>
        <IoMdRemoveCircleOutline />
      </button>
    </div>
  );
};

export default CartItem;
