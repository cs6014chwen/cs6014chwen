$(function () {
  var height = $(window).height();
  $(window).scroll(function () { 
    if ($(window).scrollTop() >= height) {
      $('.btn_top').fadeIn();
    }else {
      $('.btn_top').fadeOut();
    }
  });
});