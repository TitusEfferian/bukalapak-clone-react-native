import { xhr, GET } from "./apis";

export function getSection1Api(token){
    return xhr('https://api.bukalapak.com/products/popular/Section-1?access_token='+token,GET,null,null);
}