import {combineReducers} from 'redux'
import {foodReducer} from './foodReducer'
import {AuthReducer} from "./authReducer";
import {ErrorReducer} from "./errorsReducer";
import {kitchenReducer} from "./KitchenReducer";
import {orderedGoodsReducer} from "./cartReducer";

export default combineReducers({
    food: foodReducer,
    kitchen: kitchenReducer,
    cart:orderedGoodsReducer,
    auth: AuthReducer,
    errors: ErrorReducer
})