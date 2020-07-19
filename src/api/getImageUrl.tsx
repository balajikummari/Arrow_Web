import getUrl, { UrlEndpoints } from '../helpers/url_builder';
import { Url } from '../app_constants';
export async function getImageUrl(jsonData: any) {
  const formData = new FormData();
  formData.append("file", jsonData);
  const response = await new Promise(resolve => {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", Url+"/image", true);
    xhr.onload = function (e) {
      resolve(xhr.responseText);
    };
    xhr.onerror = function () {
      resolve(undefined);
      console.error("** An error occurred during the XMLHttpRequest");
    };
    xhr.send(formData);
  })
  return response;
}