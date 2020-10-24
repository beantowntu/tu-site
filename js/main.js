(function () {
$('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () {
  $('.navbar-toggler:visible').click();
});
})();

