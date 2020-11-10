import * as api from './api.js'
import * as banner from './banner.js'
import * as launcher from './launcher.js'
import {DropdownMenu} from './dropdown.js'

var TOKEN = "testtest";

document.addEventListener('DOMContentLoaded', function() {
  //create all objects
  var apiObject = new api.Request(TOKEN);
  var bannerObject = new banner.Banner(apiObject, "banner");
  var launcherObject = new launcher.Launcher(apiObject, "icons_container");
  var dropdownObject = new DropdownMenu("header_User_Icon", "header_User_Dropdown");
  //remove loading overlay
  var loadingOverlay = document.getElementsByClassName('mainLoadingOverlay')[0];
  setTimeout(() => { loadingOverlay.style.display = "none";  }, 2000)
}, false);
