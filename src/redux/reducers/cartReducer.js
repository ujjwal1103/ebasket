import { actionTypes } from "../constants/action-type"

const initialState = {
    cart:[]
}

export const cartReducer=(state=initialState,{type,payload})=>{
        switch(type){
            case actionTypes.FETCH_CART:
                    return {...state,cart:payload};
            default:
                return state
        }
}