import { ADD_ALL_FOOD } from "../reducers/type"
import axios from 'axios'

export const arrayBufferToBase64 =(buffer)=> {
    let binary = ''
    let bytes = [].slice.call(new Uint8Array(buffer))
    bytes.forEach((b) => binary += String.fromCharCode(b))
    return window.btoa(binary)
}

export const addAllFood = () => dispatch =>{
    axios.get('/food')
            .then(res => {
                res.data.map(item =>{
                    const base64Flag = 'data:image/jpeg;base64,'
                    const imageStr = arrayBufferToBase64(item.img.data.data)
                    item.img = base64Flag + imageStr
                    return item
                })
                dispatch({type:ADD_ALL_FOOD,payload:res.data})
            })

}
