import {all,takeEvery } from "redux-saga/effects";
import * as Types from '../actions/types'
import { fetchProductApi } from "./viewProduct";
import { fetchBrandApi } from "./viewBrand";
import { fetchBannerApi } from "./viewBanner";
import { fetchSection1Api } from "./section1";
import { fetchSection2Api } from "./section2";
export default function* watchSagas() {
    yield all([
        yield takeEvery(Types.REQUEST_DATA_PRODUCT,fetchProductApi),
        yield takeEvery(Types.REQUEST_DATA_BRAND,fetchBrandApi),
        yield takeEvery(Types.REQUEST_DATA_BANNER,fetchBannerApi),
        yield takeEvery(Types.REQUEST_DATA_SECTION1,fetchSection1Api),
        yield takeEvery(Types.REQUEST_DATA_SECTION2,fetchSection2Api)
    ])
}