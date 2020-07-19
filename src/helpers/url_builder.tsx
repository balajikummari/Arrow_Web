import { Url } from "../app_constants";

export enum UrlEndpoints {
    ImageEndPoint,
    PostAppData,
    GetAppData,
}
function getUrl(value:any)
{
    switch(value) {
        case UrlEndpoints.GetAppData:
            return Url+"/image";
        case UrlEndpoints.PostAppData:
            return Url+"/store";
        case UrlEndpoints.GetAppData:
            return Url+"/store/";
      }
}
export default getUrl;