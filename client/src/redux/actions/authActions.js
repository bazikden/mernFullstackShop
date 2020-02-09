import { IS_LOADING, LOGIN, LOGIN_MODAL, LOGOUT, SIGN_UP, SIGN_UP_MODAL} from "../reducers/type";
import axios from "axios";
import {clearErrors, getErrors} from "./errorsActions";

export const toggleSignUpModal = () => dispatch => {
    dispatch({type: SIGN_UP_MODAL})
}

export const signUp = data => dispatch => {
    const body = JSON.stringify(data)
    axios.post('/users', body, {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => {
            dispatch({type: SIGN_UP, payload: res})
            dispatch(clearErrors())
        })
        .catch(err => {
            err.response && dispatch(getErrors(err.response.data.msg, err.response.status))
        })

}

export const toggleLoginModal = () => dispatch => {
    dispatch({type: LOGIN_MODAL})
}

export const login = data => dispatch => {
    const body = JSON.stringify(data)
    axios.post('/auth', body, {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => {
            dispatch({type: LOGIN, payload: res.data})
            dispatch({type: LOGIN_MODAL})
            dispatch(clearErrors())
        })
        .catch(err => {
            err.response && dispatch(getErrors(err.response.data.msg, err.response.status))
        })
}

export const logOut = () => dispatch => {
    dispatch({type: LOGOUT})
}

export const isLoading = () => ({type: IS_LOADING})


