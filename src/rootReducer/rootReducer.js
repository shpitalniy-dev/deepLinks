import { combineReducers } from "redux";
import { ageReducer } from "./reducers/ageReducer";

export default combineReducers({
    age: ageReducer,
})