import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {
    getBannerApi
} from '../services/apis/viewBanner';
import { REQUEST_DATA_BANNER_SUCCESS, REQUEST_DATA_BANNER_FAILURE } from '../actions/types';
import {token} from './token';

export function* fetchBannerApi(action) {
    try {
        const data = yield getBannerApi(token)


        yield put({ type: REQUEST_DATA_BANNER_SUCCESS, data })
    } catch (e) {
        yield put({ type: REQUEST_DATA_BANNER_FAILURE, errData: { message: e.message, code: e.code } })
    }
}