import {all,takeEvery } from "redux-saga/effects";
import * as Types from '../actions/types'
import { fetchProductApi } from "./viewProduct";
import { fetchBrandApi } from "./viewBrand";
import { fetchBannerApi } from "./viewBanner";
export default function* watchSagas() {
    yield all([
        yield takeEvery(Types.REQUEST_DATA_PRODUCT,fetchProductApi),
        yield takeEvery(Types.REQUEST_DATA_BRAND,fetchBrandApi),
        yield takeEvery(Types.REQUEST_DATA_BANNER,fetchBannerApi)
    ])
}