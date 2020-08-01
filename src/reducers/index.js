import { combineReducers } from "redux"
import counterReducer from './counter'
import loggedReducer from "./isLogged"





const root = combineReducers({
    counter: counterReducer,
    logged: loggedReducer
})



export default root