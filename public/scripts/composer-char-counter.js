$(document).ready(function() {

  // $("form textarea").blur(function() {
  //   console.log("blur")
  //   console.log($(this).val())
  // })

  // $("form textarea").change(function() {
  //   console.log("change")
  //   console.log($(this).val())
  // })

  // $("form textarea").keydown(function() {
  //   console.log("keydown")
  //   console.log($(this).val())
  // })

  $("form textarea").keyup(function() {
    $("form span.counter").text(140 - $(this).val().length);
    if ($(this).val().length > 140) {
    $("form span.counter").addClass("red")
    }
  })

  // $("form textarea").keypress(function() {
  //   console.log("keypress")
  //   console.log($(this).val().length)
  // })

  // $("form span").keypress(function(){
  //   console.log(this)
  // })

});