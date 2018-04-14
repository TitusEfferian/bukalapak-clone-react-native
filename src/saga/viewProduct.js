import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {
    getProductApi
} from '../services/apis/viewProduct';
import { SUCCESS, FAILED } from '../actions/types';

export function* fetchProductApi(action) {
    try {
        const data = yield getProductApi()


        yield put({ type: SUCCESS, data })
    } catch (e) {
        yield put({ type: FAILED, errData: { message: e.message, code: e.code } })
    }
}