import {CLEAR_ERRORS, GET_ERRORS} from "./type";

const initialState = {
    msg: {},
    status: null
}

export const ErrorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ERRORS:
            return {
                ...state,
                msg: action.payload.msg,
                status: action.payload.status
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                msg: {},
                status: null
            }

        default:
            return state

    }
}