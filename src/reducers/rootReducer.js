import { combineReducers } from "redux";
const rootReducer = combineReducers({
    viewProductReducer: require('./viewProductReducer').reducer,
    viewBrandReducer: require('./viewBrandReducer').reducer,
    viewBannerReducer: require('./viewBannerReducer').reducer,
    section1Reducer: require('./section1Reducer').reducer
})

export default rootReducer;