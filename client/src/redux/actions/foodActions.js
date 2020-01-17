import { ADD_ALL_FOOD } from "../reducers/type"
import axios from 'axios'

export const addAllFood = () => dispatch =>{
    axios.get('/food')
            .then(res => {
                dispatch({type:ADD_ALL_FOOD,payload:res.data})
            })

}
