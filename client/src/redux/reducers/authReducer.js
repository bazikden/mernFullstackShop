import {IS_LOADING, LOGIN, LOGIN_MODAL, LOGOUT, SIGN_UP, SIGN_UP_MODAL} from "./type";

const initialState = {
    signUpModal:false,
    loginModal:false,
    isAuth:false,
    loginedUser:null,
    token:null,
    isLoading:false

}

export const AuthReducer = (state=initialState,action)=>{
    switch (action.type) {
        case SIGN_UP_MODAL:
            return{
                ...state,
                signUpModal: !state.signUpModal
            }

        case LOGIN_MODAL:
            return{
                ...state,
                loginModal: !state.loginModal
            }

        case SIGN_UP:
            return {
                ...state,
                isAuth: true,
                authUser: action.payload
            }

        case LOGIN:
            return {
                ...state,
                token:action.payload.token,
                loginedUser:action.payload.user,
                isAuth: true
            }

        case LOGOUT:
            return {
                ...state,
                isAuth: false,
                loginedUser: null,
                token:null
            }

        case IS_LOADING:
            return {
                ...state,
                isLoading:!state.isLoading
            }

        default:
            return state
    }
}
