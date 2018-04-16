import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {
    getSection2Api
} from '../services/apis/section2';
import { REQUEST_DATA_SECTION2_SUCCESS, REQUEST_DATA_SECTION2_FAILURE } from '../actions/types';
import {token} from './token';

export function* fetchSection2Api(action) {
    try {
        const data = yield getSection2Api(token)
        yield put({ type:REQUEST_DATA_SECTION2_SUCCESS, data })
    } catch (e) {
        yield put({ type: REQUEST_DATA_SECTION2_FAILURE, errData: { message: e.message, code: e.code } })
    }
}