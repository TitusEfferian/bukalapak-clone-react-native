import { combineReducers } from "redux";
const rootReducer = combineReducers({
    viewProductReducer: require('./viewProductReducer').reducer,
    viewBrandReducer: require('./viewBrandReducer').reducer
})

export default rootReducer;