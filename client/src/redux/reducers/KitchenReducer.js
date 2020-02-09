import {ADD_ALL_KITCHEN} from "./type"

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
        case "ADD_ITEM":
            return {
                ...state,
                items: [...state.items, action.payload]
            }

        default:
            return state
    }
}