import {ADD_TO_CART, BUYING_MODAL, DEL_FROM_CART} from "../reducers/type";

export const toggleCartModal = () =>({type:BUYING_MODAL})

export const addToCart = (data) => ({type:ADD_TO_CART,payload:data})

export const delFromCart = (item) => ({type:DEL_FROM_CART,payload:item})