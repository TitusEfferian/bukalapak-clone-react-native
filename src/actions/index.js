import { createAction } from "redux-actions";
import { REQUEST_DATA_PRODUCT, SUCCESS, FAILED } from "./types";

export const requestDataProduct = createAction(REQUEST_DATA_PRODUCT)
export const success = createAction(SUCCESS)
export const failed = createAction(FAILED)