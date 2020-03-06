import {ADD_ALL_FOOD, ADD_FOOD_ITEM, DEL_FOOD_ITEM} from "./type"

const initialState = {
    items: []
}


export const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ALL_FOOD:
            return {
                ...state,
                items: action.payload
            }

        case ADD_FOOD_ITEM:{
            return {
                ...state,
                items:[...state.items,{id:1,msg:action.payload}]
            }
        }

        case DEL_FOOD_ITEM: {
            return {
                ...state,
                items:{...state.items,docs:state.items.docs.filter(item => item._id !== action.payload)}

            }
        }

        default:
            return state
    }
}