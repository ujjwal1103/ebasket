import { actionTypes } from "../constants/action-type"

const initialState = {
    products:[]
}

export const categoryReducer=(state=initialState,{type,payload})=>{
        switch(type){
            case actionTypes.FETCH_PRODUCTS_BY_CATEGORY:
                    return {...state,products:payload};
            
            default:
                return state
        }
}