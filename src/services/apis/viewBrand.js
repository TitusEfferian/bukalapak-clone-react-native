import { xhr, GET } from "./apis";

export function getBrandApi(token){
    return xhr('https://api.bukalapak.com/official-brand-stores/promoted?access_token='+token,GET,null,null);
}