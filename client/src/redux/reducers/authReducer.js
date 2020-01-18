import {LOGIN_MODAL, SIGN_UP, SIGN_UP_MODAL} from "./type";

const initialState = {
    signUpModal:false,
    loginModal:false,
    isAuth:false

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



        default:
            return state
    }
}
