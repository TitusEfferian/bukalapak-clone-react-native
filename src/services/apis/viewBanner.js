import { xhr, GET } from "./apis";

export function getBannerApi(token){
    return xhr('https://api.bukalapak.com/info/banners?platform=mobile&type=flash_banner&access_token='+token,GET,null,null);
}