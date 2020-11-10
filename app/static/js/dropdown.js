export class DropdownMenu{

  constructor(button, dropdown){
    this.button = document.getElementsByClassName(button)[0]
    this.dropdownHtml = document.getElementsByClassName(dropdown)[0]
    this.dropdownHtml.style.display = "none"
    this.button.onclick = function(dropdownObject) {
      return function() {
        dropdownObject.toggle();
      };
    }(this);
  }

  toggle(){
    if (this.dropdownHtml.style.display == "none") {
      this.dropdownHtml.style.display = "block";
    } else {
      this.dropdownHtml.style.display = "none";
    }
  }
}
