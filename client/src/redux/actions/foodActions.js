import {ADD_ALL_FOOD, ADD_FOOD_ITEM} from "../reducers/type"
import axios from 'axios'
import {isLoading} from "./authActions";

export const arrayBufferToBase64 = (buffer) => {
    let binary = ''
    let bytes = [].slice.call(new Uint8Array(buffer))
    bytes.forEach((b) => binary += String.fromCharCode(b))
    return window.btoa(binary)
}


export const addAllFood = (page = 1) => dispatch => {
    dispatch(isLoading())
    axios.get(`/food/${page}`,)
        .then(res => {
            res.data.docs.map(item => {
                const base64Flag = 'data:image/jpeg;base64,'
                const imageStr = arrayBufferToBase64(item.img.data.data)
                item.img = base64Flag + imageStr
                return item
            })
            dispatch({type: ADD_ALL_FOOD, payload: res.data})
            dispatch(isLoading())
        })

}

export const addFoodItem = (data) => dispatch =>{
    dispatch({type:ADD_FOOD_ITEM,payload: data})
}
