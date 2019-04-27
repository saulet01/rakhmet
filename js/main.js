let button1 = $('.btn-up');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    button1.addClass('show-button');
  } else {
    button1.removeClass('show-button');
  }
});

button1.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

new WOW().init();
