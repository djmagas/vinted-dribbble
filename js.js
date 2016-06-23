var xmlhttp = new XMLHttpRequest();
var url = "https://api.dribbble.com/v1/users/creativemints/likes/?access_token=bafd540374369dfd0af5603ebb07973a6964a128810de4abb1cbbcde205ab532";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    var out = "";
    var i;
    console.log(arr);
    for(i = 0; i < arr.length; i++) {
        out += '<figure class="gallery__item"><img src="' + arr[i].shot.images.normal + '"><figcaption class="gallery__caption"><div class="gallery__textwraper"><h2 class="gallery__caption__title">' + arr[i].shot.title + '</h2><span class="gallery__caption__author">' + arr[i].shot.user.name + '</span></div><a href="' + arr[i].likes_url + '" class="gallery__item__button" target="_blank">Favourite</a></figcaption></figure>'
    }
    document.getElementById("gallery").innerHTML = out;
}


// var xhr = new XMLHttpRequest();
// xhr.open("GET", "", false);

// xhr.send();

// console.log(xhr.status);

// var json = '{"result":true,"count":1}',
//     obj = JSON.parse(json);

// alert(obj.count);



// $(function() {
// 	$per_page = 21;
// 	$.getJSON('https://api.dribbble.com/v1/users/shots/?access_token=bafd540374369dfd0af5603ebb07973a6964a128810de4abb1cbbcde205ab532&callback=?&per_page='+$per_page+'', function(resp) {
// 		if (resp.data.length > 0) {
// 			console.log(resp.data);
// 			$.each(resp.data.reverse(), function(i, val) {
// 				$('.gallery').prepend('<figure class="gallery__item"><img src="'+val.images.normal+'"><figcaption class="gallery__caption"><div class="gallery__textwraper"><h2 class="gallery__caption__title">'+val.title+'</h2><span class="gallery__caption__author">{author}</span></div><a href="'+val.html_url+'" class="gallery__item__button" target="_blank">Favourite</a></figcaption></figure>'
// 				);
// 			});
// 		}
// 		else {
// 			$('.gallery').append('<div class="gallery__item">No shots.</div>');
// 		}
// 	});
// });