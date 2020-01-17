import {ADD_ALL_FOOD} from "./type"

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
        case "ADD_ITEM":
            return {
                ...state,
                items: [...state.items, {id: 5, name: action.payload}]
            }

        default:
            return state
    }
}