import {ADD_ALL_KITCHEN, DEL_KITCHEN_ITEM} from "./type"

const initialState = {
    items: []
}


export const kitchenReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ALL_KITCHEN:
            return {
                ...state,
                items: action.payload
            }


        case DEL_KITCHEN_ITEM: {
            return {
                ...state,
                items: {...state.items, docs: state.items.docs.filter(item => item._id !== action.payload)}

            }
        }

        default:
            return state
    }
}