$(document).ready(function() {

  $("form textarea").keyup(function() {
    $("form span.counter").text(140 - $(this).val().length);
    if ($(this).val().length > 140) {
    $("form span.counter").addClass("red")
    }
  })
});