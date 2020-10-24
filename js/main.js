(function () {
$('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () {
  setTimeout($('.navbar-toggler:visible').click(), 200);
});
})();

