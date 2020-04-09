import config from "../../config/config";
import actionTypes from "../../constants/actionTypes";

const initialState = {
    accounts: config.defaultAccounts,
}

export const appReducer = (state = initialState, action) => {
    const newState = { ...state };
    return newState;
}