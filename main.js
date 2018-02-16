var data = new FormData();
data.append("files[]", "C:\\Users\\PD\\Downloads\\103c73c5ef8e565714dd323998ca82ad.obj");

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api.makeprintable.com/v3/operation/upload");
xhr.setRequestHeader("Authorization", "Bearer d9c37d1f0655faff2def03d7296ca3306770022f");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.setRequestHeader("Postman-Token", "7e11d10d-a155-2f0c-6ce4-310ca3fd5bfa");

xhr.send(data);