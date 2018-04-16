import { createAction } from "redux-actions";
import { REQUEST_DATA_PRODUCT, SUCCESS, FAILED, REQUEST_DATA_BRAND, REQUEST_DATA_BRAND_SUCCESS, REQUEST_DATA_BRAND_FAILURE, REQUEST_DATA_BANNER, REQUEST_DATA_BANNER_SUCCESS, REQUEST_DATA_BANNER_FAILURE, REQUEST_DATA_SECTION1, REQUEST_DATA_SECTION1_SUCCESS, REQUEST_DATA_SECTION1_FAILURE, REQUEST_DATA_SECTION2, REQUEST_DATA_SECTION2_SUCCESS, REQUEST_DATA_SECTION2_FAILURE } from "./types";

export const requestDataProduct = createAction(REQUEST_DATA_PRODUCT)
export const success = createAction(SUCCESS)
export const failed = createAction(FAILED)

export const requestDataBrand = createAction(REQUEST_DATA_BRAND)
export const requestDataBrandSuccess = createAction(REQUEST_DATA_BRAND_SUCCESS)
export const requestDataBrandFailure = createAction(REQUEST_DATA_BRAND_FAILURE)

export const requestDataBanner = createAction(REQUEST_DATA_BANNER)
export const requestDataBannerSuccess = createAction(REQUEST_DATA_BANNER_SUCCESS)
export const requestDataBannerFailure = createAction(REQUEST_DATA_BANNER_FAILURE)

export const requestDataSection1 = createAction(REQUEST_DATA_SECTION1)
export const requestDataSection1Success = createAction(REQUEST_DATA_SECTION1_SUCCESS)
export const requestDataSectoin1Failure = createAction(REQUEST_DATA_SECTION1_FAILURE)

export const requestDataSection2 = createAction(REQUEST_DATA_SECTION2)
export const requestDataSection2Success = createAction(REQUEST_DATA_SECTION2_SUCCESS)
export const requestDataSection2Failure = createAction(REQUEST_DATA_SECTION2_FAILURE)