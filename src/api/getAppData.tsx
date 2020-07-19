import getUrl, { UrlEndpoints } from "../helpers/url_builder";
import { Url } from "../app_constants";

export async function getAppData(id: string) {
    const urlString = Url+"/store/" + id;
    const res = await fetch(urlString, {
        method: 'GET',
        headers: {
            "accept": "text/plain"
        }
    });
    if (res.status === 200) {
        const json = await res.json();
        return json;
    }
    else {
        return null;
    }
}
