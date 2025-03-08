console.log(fullPage);

// FullPage.js Options
new fullpage('#fullPage', {
    autoScrolling: true,
    navigation: true,
    navigationTooltips: ['Trip Dates','Photo Gallery','Map of Hong Kong'],
    scrollingSpeed: 500
})

// Date Range Picker
$(function() {
  $('input[name="daterange"]').daterangepicker({
    "opens": "center",
    "drops": "up"
  }, function(start, end, label) {
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});

// Slick Slider 
$(document).ready(function(){
  $('.gallery').slick({
      arrows: false,
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 1500,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
});
//  Map
var map = L.map('map', {
  center: [22.2969, 114.1738],
  zoom: 13,
  scrollWheelZoom: false
});
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);