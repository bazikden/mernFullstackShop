import {combineReducers} from 'redux'
import {foodReducer} from './foodReducer'
import {AuthReducer} from "./authReducer";
import {ErrorReducer} from "./errorsReducer";

export default combineReducers({
    food:foodReducer,
    auth:AuthReducer,
    errors:ErrorReducer
})