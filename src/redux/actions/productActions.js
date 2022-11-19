
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
export const deleteProduct=(id)=> async  (dispatch)=>{
         await products.delete(`/products/${id}`);
         dispatch({type:actionTypes.DELETE_PRODUCT,payload:"Product Deleted"})
}
export const deleteCartItem=(id)=> async  (dispatch)=>{
         await products.delete(`/item/${id}`);
         dispatch({type:actionTypes.DELETE_CART,payload:"CART Deleted"})
}
export const fetchProductsByCategory=(category)=> async  (dispatch)=>{
         const response = await products.get(`product/productbycategory/${category}`);
         dispatch({type:actionTypes.FETCH_PRODUCTS_BY_CATEGORY,payload:response.data})
}
export const fetchCart=(userId)=> async(dispatch)=>{
    const response = await products.get(`cartItemsByUserId/${userId}`);
    dispatch({type:actionTypes.FETCH_CART,payload:response.data})
}
export const selectedProduct=(product)=>({
    type: actionTypes.SELECTED_PRODUCT,
    payload: product
})