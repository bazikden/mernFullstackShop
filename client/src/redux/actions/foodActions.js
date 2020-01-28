import {ADD_ALL_FOOD, IS_LOADING} from "../reducers/type"
import axios from 'axios'

export const arrayBufferToBase64 = (buffer) => {
    let binary = ''
    let bytes = [].slice.call(new Uint8Array(buffer))
    bytes.forEach((b) => binary += String.fromCharCode(b))
    return window.btoa(binary)
}



export const addAllFood = (page=1) => dispatch => {
    dispatch({type: IS_LOADING})
    axios.get(`/food/${page}`,)
        .then(res => {
            res.data.docs.map(item => {
                const base64Flag = 'data:image/jpeg;base64,'
                const imageStr = arrayBufferToBase64(item.img.data.data)
                item.img = base64Flag + imageStr
                return item
            })
            dispatch({type: ADD_ALL_FOOD, payload: res.data})
            dispatch({type: IS_LOADING})
        })

}
