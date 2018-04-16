import { combineReducers } from "redux";
const rootReducer = combineReducers({
    viewProductReducer: require('./viewProductReducer').reducer,
    viewBrandReducer: require('./viewBrandReducer').reducer,
    viewBannerReducer: require('./viewBannerReducer').reducer,
    section1Reducer: require('./section1Reducer').reducer,
    section2Reducer: require('./section2Reducer').reducer
})

export default rootReducer;