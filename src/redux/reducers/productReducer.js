import { actionTypes } from "../constants/action-type"

const initialState = {
    products:[]
}

export const productReducer=(state=initialState,{type,payload})=>{
        switch(type){
            case actionTypes.SET_PRODUCTS:
                   return {...state,products:payload};
            case actionTypes.DELETE_PRODUCT:
                   return {...state}
            case actionTypes.FETCH_PRODUCTS:
                    return {...state,products:payload};
            
            default:
                return state
        }
}