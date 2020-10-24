import * as api from './api.js'
import * as banner from './banner.js'
import * as launcher from './launcher.js'

var TOKEN = "testtest";

document.addEventListener('DOMContentLoaded', function() {
  var apiObject = new api.Request(TOKEN);
  var bannerObject = new banner.Banner(apiObject, "banner");
  var launcherObject = new launcher.Launcher(apiObject, "icons_container");
}, false);
