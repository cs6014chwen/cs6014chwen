$(document).ready(function () {
  $("#menuBlock").load("menu.html #menuBlock");
  $(".menu-direction").addClass("fdsfs");

  var filename = location.pathname;
  var urlfire = "/kix2018/page/";
  if (filename == urlfire + 'day1.html') {
    $("#directionUrl").html('<a href="day2.html" class="menu-next"><span class="icon-next"></span></a>');
  }else if(filename == urlfire + 'day2.html') {
    $("#directionUrl").html('<a href="day1.html" class="menu-prev"><span class="icon-prev"></span></a><a href="day3.html" class="menu-next"><span class="icon-next"></span></a>');
  }else if(filename == urlfire + 'day3.html') {
    $("#directionUrl").html('<a href="day2.html" class="menu-prev"><span class="icon-prev"></span></a><a href="day4.html" class="menu-next"><span class="icon-next"></span></a>');
  }else if(filename == urlfire + 'day4.html') {
    $("#directionUrl").html('<a href="day3.html" class="menu-prev"><span class="icon-prev"></span></a><a href="day5.html" class="menu-next"><span class="icon-next"></span></a>');
  }else if(filename == urlfire + 'day5.html') {
    $("#directionUrl").html('<a href="day4.html" class="menu-prev"><span class="icon-prev"></span></a><a href="day6.html" class="menu-next"><span class="icon-next"></span></a>');
  }else if(filename == urlfire + 'day6.html') {
    $("#directionUrl").html('<a href="day5.html" class="menu-prev"><span class="icon-prev"></span></a><a href="day7.html" class="menu-next"><span class="icon-next"></span></a>');
  }else if(filename == urlfire + 'day7.html') {
    $("#directionUrl").html('<a href="day6.html" class="menu-prev"><span class="icon-prev"></span></a>');
  };
  
});