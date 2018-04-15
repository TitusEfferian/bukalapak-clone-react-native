import { combineReducers } from "redux";
const rootReducer = combineReducers({
    viewProductReducer: require('./viewProductReducer').reducer,
    viewBrandReducer: require('./viewBrandReducer').reducer,
    viewBannerReducer: require('./viewBannerReducer').reducer
})

export default rootReducer;