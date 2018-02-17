//var data = new FormData();
var data = new FormData();
var fileList="files[0]";
var url;
var el = document.querySelector("#userfile")
el.addEventListener("change", passObj, false);
function passObj(){
  var fileList = this.files[0];
  var url=el.value.toString();
  console.log(fileList);
  console.log(url);
}


data.append(fileList, url);

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api.makeprintable.com/v3/operation/upload");
xhr.setRequestHeader("Authorization", "Bearer b84386d6cd92626415b423207d3444127d5ea2a5");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.setRequestHeader("Postman-Token", "57ef0458-5489-caad-f88c-b34c644fb133");

xhr.send(data);