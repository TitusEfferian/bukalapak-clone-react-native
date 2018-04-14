import { createAction } from "redux-actions";
import { REQUEST_DATA_PRODUCT, SUCCESS, FAILED, REQUEST_DATA_BRAND, REQUEST_DATA_BRAND_SUCCESS, REQUEST_DATA_BRAND_FAILURE } from "./types";

export const requestDataProduct = createAction(REQUEST_DATA_PRODUCT)
export const success = createAction(SUCCESS)
export const failed = createAction(FAILED)

export const requestDataBrand = createAction(REQUEST_DATA_BRAND)
export const requestDataBrandSuccess = createAction(REQUEST_DATA_BRAND_SUCCESS)
export const requestDataBrandFailure = createAction(REQUEST_DATA_BRAND_FAILURE)