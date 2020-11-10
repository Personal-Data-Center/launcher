import * as api from './api.js'

export class Launcher {
  constructor(api, launcherHtmlClass){
    this.apps = api.getServices();
    this.launcherHtmlObject = document.getElementsByClassName(launcherHtmlClass)[0];
    this.generate();
  }

  generate(){
    for (var i = 0; i < this.apps.length; i++) {
      var icon = '\
      <a class="icon_container" href="' + this.apps[i].path + '">\
        <div class="icon" style="background-image: url(' + this.apps[i].icon + ')"></div>\
        <div class="icon_name" href="">' + this.apps[i].name + '</div>\
      </a>\
      '
      this.launcherHtmlObject.innerHTML += icon;
    }
  }
}
