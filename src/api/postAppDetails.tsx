import getUrl, { UrlEndpoints } from "../helpers/url_builder";
import { Url } from "../app_constants";

export async function postAppDetails(jsonData: string) {
    const urlString=Url+"/store";
    const res = await fetch(urlString, {
        method: 'POST',
        body: jsonData,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(res.status===200)
    {
    const json = await res.json();
    return json;
    }
    else
    {
        return null;
    }
}
