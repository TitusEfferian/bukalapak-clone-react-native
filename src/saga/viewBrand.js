import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {
    getBrandApi
} from '../services/apis/viewBrand';
import { REQUEST_DATA_BRAND_SUCCESS, FAILED, REQUEST_DATA_BRAND_FAILURE } from '../actions/types';
import {token} from './token';

export function* fetchBrandApi(action) {
    try {
        const data = yield getBrandApi(token)


        yield put({ type: REQUEST_DATA_BRAND_SUCCESS, data })
    } catch (e) {
        yield put({ type: REQUEST_DATA_BRAND_FAILURE, errData: { message: e.message, code: e.code } })
    }
}