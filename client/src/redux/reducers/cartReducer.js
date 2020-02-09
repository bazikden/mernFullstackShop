import {ADD_TO_CART, BUYING_MODAL, DEL_FROM_CART} from "./type";

const initialState = {
    orderedGoods:[],
    cartModal:false,
    quantity:0,
    allPrice:0
}

export const orderedGoodsReducer = (state = initialState,action) =>{
    switch (action.type) {
        case ADD_TO_CART:
            return{
                ...state,
                orderedGoods: [...state.orderedGoods,action.payload],
                quantity: state.quantity + 1,
                allPrice: state.allPrice + action.payload.price
            }

        case BUYING_MODAL:
            return {
                ...state,
                cartModal: !state.cartModal
            }

        case DEL_FROM_CART:
            return {
                ...state,
                orderedGoods: state.orderedGoods.filter(item => item.id !== action.payload.id),
                allPrice: state.allPrice - action.payload.price,
                quantity: state.quantity - 1
            }

        default:
            return state

    }
}