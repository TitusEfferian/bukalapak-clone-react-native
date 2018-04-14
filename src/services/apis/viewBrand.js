import { xhr, GET } from "./apis";

export function getBrandApi(){
    return xhr('https://api.bukalapak.com/official-brand-stores/promoted?access_token=86c7c2706884605f7830038855f2f9aa2ddc0681025f114f5ac2eb2ed037cde1',GET,null,null);
}