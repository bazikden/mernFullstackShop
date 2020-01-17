import {SIGN_UP, SIGN_UP_MODAL} from "../reducers/type";
import  axios from "axios";
import {clearErrors, getErrors} from "./errorsActions";

export const toggleSignUpModal = () => dispatch =>{
    dispatch({type:SIGN_UP_MODAL})
}

export const signUp = data => dispatch =>{
   const body = JSON.stringify(data)
    axios.post('/users',body,{
        headers:{
            "Content-Type":"application/json"
        }
    })
        .then(res =>{
            dispatch({type: SIGN_UP,payload:res})
            dispatch(clearErrors())
        })
        .catch(err => {
            err.response && dispatch(getErrors(err.response.data.msg,err.response.status))
        })

}

