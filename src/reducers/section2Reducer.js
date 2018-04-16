import { REQUEST_DATA_SECTION2, REQUEST_DATA_SECTION2_SUCCESS, REQUEST_DATA_SECTION2_FAILURE } from "../actions/types";

export const INITIAL_STATE = {
    data: undefined,
    isFetching: false,
    error: false
}

export const request = (state, action) => {
    return {
        data: undefined,
        isFetching: true,
        error: false
    }
}

export const success = (state, action) => {
    return {
        data: action.data,
        isFetching: false,
        error: false
    }
}

export const failure = (state, action) => {
    return {
        data: action.errData,
        isFetching: false,
        error: true
    }
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_DATA_SECTION2:
            return request(state, action)
        case REQUEST_DATA_SECTION2_SUCCESS:
            return success(state, action)
        case REQUEST_DATA_SECTION2_FAILURE:
            return failure(state, action)
        default:
            return state
    }
}