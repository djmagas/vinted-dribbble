$(function() {

  // First portion of shots
  var i = 1;
  getPosts(i);
  

  
  function getPosts(i) {
    $.ajax({
      url: 'https://api.dribbble.com/v1/users/creativemints/likes/?access_token=bafd540374369dfd0af5603ebb07973a6964a128810de4abb1cbbcde205ab532&amp;page=' + i + '&per_page=10',
      beforeSend: function( xhr ) {
        xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
      }
    })
      .done(function( data ) {
        var shotArray = jQuery.parseJSON(data);
        $.each(shotArray, function (i, value) {
          $('#gallery').append('<figure class="gallery__item"><img data-original="' + shotArray[i].shot.images.normal + '" data-original-set="' + shotArray[i].shot.images.normal + ' 1x, ' + shotArray[i].shot.images.hidpi + ' 2x"><figcaption class="gallery__caption"><div class="gallery__textwraper"><h2 class="gallery__caption__title">' + shotArray[i].shot.title + '</h2><span class="gallery__caption__author">' + shotArray[i].shot.user.name + '</span></div><a href="' + shotArray[i].likes_url + '" class="gallery__item__button" target="_blank">Favourite</a></figcaption></figure>');
        });
        
        // Enabling LazyLoad
        (function () {
          new LazyLoad({
            show_while_loading: true
          });
        }());
      });
    i++;
  }
    
  // Load additional shots on scroll using jquery plugin. No bonus points for this :(
  $(window).endlessScroll({
    insertAfter: '#gallery',
    bottomPixels: 500,
    fireDelay: 10,
    callback: function() {
      var last_img = $("#gallery figure:last");
      last_img.after( function() {
        getPosts();
      });
    }
  });
});