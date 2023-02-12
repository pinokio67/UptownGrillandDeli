$(".button-two").click(function(e) {
  e.preventDefault();

  // Get the target section's top offset
  var target = $($(this).attr("href")).offset().top;

  // Scroll to the target section
  $("html, body").animate({
    scrollTop: target
  }, 500);
});

$(".drop-link").click(function(e) {
  e.preventDefault();

  // Get the target section's top offset
  var target = $($(this).attr("href")).offset().top;

  // Scroll to the target section
  $("html, body").animate({
    scrollTop: target
  }, 500);
});

