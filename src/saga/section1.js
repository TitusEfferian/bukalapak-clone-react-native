import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {
    getSection1Api
} from '../services/apis/section1';
import { REQUEST_DATA_SECTION1_SUCCESS, REQUEST_DATA_SECTION1_FAILURE } from '../actions/types';
import {token} from './token';

export function* fetchSection1Api(action) {
    try {
        const data = yield getSection1Api(token)
        yield put({ type:REQUEST_DATA_SECTION1_SUCCESS, data })
    } catch (e) {
        yield put({ type: REQUEST_DATA_SECTION1_FAILURE, errData: { message: e.message, code: e.code } })
    }
}