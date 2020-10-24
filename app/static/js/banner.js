import * as api from './api.js'

export class Banner {
  constructor(api, bannerHtmlClass) {
    this.news = api.getNews();
    this.bannerHtmlObject = document.getElementsByClassName(bannerHtmlClass);
    this.counter = 0;
    this.next();
  }

  next() {
    this.bannerHtmlObject[0].style.backgroundImage = 'url("'+ this.news[this.counter].img + '")';
    this.bannerHtmlObject[0].style.backgroundSize = 'cover';
    this.bannerHtmlObject[0].href= this.news[this.counter].link;
    this.bannerHtmlObject[0].innerHTML = this.news[this.counter].text;
    this.counter = this.counter + 1;
  }


}
