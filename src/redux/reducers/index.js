import {combineReducers} from "redux"
import { productReducer } from "./productReducer"
import {cartReducer} from "./cartReducer"
import {categoryReducer} from "./categoryReducer"


 const reducers = combineReducers({
    allProducts:productReducer,
    cart:cartReducer,
    productsByCategory:categoryReducer
    
})

export default reducers;