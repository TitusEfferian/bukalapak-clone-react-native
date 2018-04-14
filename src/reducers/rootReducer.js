import { combineReducers } from "redux";
const rootReducer = combineReducers({
    viewProductReducer: require('./viewProductReducer').reducer
})

export default rootReducer;