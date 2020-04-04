import config from "../../config/config";
import actionTypes from "../../constants/actionTypes";

const initialState = {
    age: config.defaultAge,
}

export const ageReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch(action.type){
        case actionTypes.SET_AGE:
            newState.age = action.payload;
            break;
    }
    return newState;
}