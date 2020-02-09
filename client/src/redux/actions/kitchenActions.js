import {ADD_ALL_KITCHEN} from "../reducers/type"
import axios from 'axios'
import {isLoading} from "./authActions";

export const arrayBufferToBase64 = (buffer) => {
    let binary = ''
    let bytes = [].slice.call(new Uint8Array(buffer))
    bytes.forEach((b) => binary += String.fromCharCode(b))
    return window.btoa(binary)
}


export const addAllKitchen = (page = 1) => dispatch => {
    dispatch(isLoading())
    axios.get(`/kitchen/${page}`,)
        .then(res => {
            res.data.docs.map(item => {
                const base64Flag = 'data:image/jpeg;base64,'
                const imageStr = arrayBufferToBase64(item.img.data.data)
                item.img = base64Flag + imageStr
                return item
            })
            dispatch({type: ADD_ALL_KITCHEN, payload: res.data})
            dispatch(isLoading())
        })

}
