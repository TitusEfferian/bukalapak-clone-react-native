import { xhr, GET } from "./apis";

export function getProductApi(){
    return xhr('https://api.bukalapak.com/v2/products.json?page=1&top_seller=1&per_page=10',GET,null,null);
}