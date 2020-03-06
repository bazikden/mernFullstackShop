import axios from 'axios'
import {DEL_FOOD_ITEM, DEL_KITCHEN_ITEM} from "../reducers/type";
import {addAllFood} from "./foodActions";
import {addAllKitchen} from "./kitchenActions";

export const delCardItem = (id, path, token,page) => dispatch => {

    axios.delete(`${path}/${id}`, {
        headers: {
            "Authorization": token
        }
    })
        .then(res => {
            if (path === '/food') {
                dispatch({type: DEL_FOOD_ITEM, payload: id})
                dispatch(addAllFood(page))
            }
            if (path === '/kitchen') {
                dispatch({type: DEL_KITCHEN_ITEM, payload: id})
                dispatch(addAllKitchen(page))
            }
        })

}