import {GET_ERRORS} from "../reducers/type";

export const getErrors = (msg,status) =>{
    return {
        type:GET_ERRORS,payload:{msg,status}
    }

}
export const clearErrors = () =>{
    return {
        type:GET_ERRORS
    }
}

