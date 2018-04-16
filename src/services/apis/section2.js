import { xhr, GET } from "./apis";

export function getSection2Api(token){
    return xhr('https://api.bukalapak.com/products/popular/Section-2?access_token='+token,GET,null,null);
}