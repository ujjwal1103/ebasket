
import products from "../../apis/products"
import { actionTypes } from "../constants/action-type"
export const setProducts=(products)=>{
   return {
    type:actionTypes.SET_PRODUCTS,
    payload:products
   }
}
export const fetchProducts=()=> async  (dispatch)=>{
         const response = await products.get("/products");
         dispatch({type:actionTypes.FETCH_PRODUCTS,payload:response.data})
}

export const fetchCart=(userId)=> async(dispatch)=>{
    const response = await products.get(`cartItemsByUserId/${userId}`);
    dispatch({type:actionTypes.FETCH_CART,payload:response.data})
}

export const selectedProduct=(product)=>({
    type: actionTypes.SELECTED_PRODUCT,
    payload: product
})