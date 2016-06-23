var page = 1;
var xmlhttp = new XMLHttpRequest();
var url = 'https://api.dribbble.com/v1/users/creativemints/likes/?access_token=bafd540374369dfd0af5603ebb07973a6964a128810de4abb1cbbcde205ab532&amp;page=' + page + '';

xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var shotArray = JSON.parse(xmlhttp.responseText);
    buildShot(shotArray);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function buildShot(arr) {
  var out = "";
  var i;
  //console.log(arr);
  for(i = 0; i < arr.length; i++) {
    out += '<figure class="gallery__item"><img data-original="' + arr[i].shot.images.normal + '" data-original-set="' + arr[i].shot.images.normal + ' 1x, ' + arr[i].shot.images.hidpi + ' 2x"><figcaption class="gallery__caption"><div class="gallery__textwraper"><h2 class="gallery__caption__title">' + arr[i].shot.title + '</h2><span class="gallery__caption__author">' + arr[i].shot.user.name + '</span></div><a href="' + arr[i].likes_url + '" class="gallery__item__button" target="_blank">Favourite</a></figcaption></figure>'
  }
  document.getElementById("gallery").innerHTML = out;
  (function () {
    new LazyLoad({
      show_while_loading: true
    });
  }());
}