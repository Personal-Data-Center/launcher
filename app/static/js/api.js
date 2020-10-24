import {
  Tapp
} from './Tapp.js'
import {
  Tnews
} from './Tnews.js'

export var API_PATH = '/api/';

export class Request {

  constructor(token) {
    this.token = token;
    this.api_path = API_PATH;
  }

  getServices() {
    var servicesList = [];
    var request = this.getJson(this.api_path + "listservices");
    for (var i = 0; i < request.service.length; i++) {
      var serviceObject = new Tapp(
        request.service[i].name,
        request.service[i].path,
        request.service[i].icon);
      servicesList.push(serviceObject);
    }
    return servicesList;
  }

  getNews() {
    var newsList = [];
    var request = this.getJson(this.api_path + "listnews");
    for (var i = 0; i < request.news.length; i++) {
      var newsObject = new Tnews(
        request.news[i].image,
        request.news[i].text,
        request.news[i].link);
      newsList.push(newsObject);
    }
    return newsList;
  }

  getJson(url) {
    var json;
    var request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send(null);
    json = JSON.parse(request.responseText);
    return json;
  }
}
