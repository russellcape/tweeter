$(document).ready(function() {
console.log("Dom ready")

  $(".tweet-container").on("mouseenter", function() {
    $(this).find(".post-poster").css( {
      "opacity": .5,
      "color": "#212529",
    })
  })

  $(".tweet-container").on("mouseleave", function() {
    $(this).find(".post-poster").css( {
      "opacity": 0
    })
  })

  $(".tweet-container").on("mouseenter", function() {
    $(this).find(".logo").css( {
      "opacity": 1,
      "color": "#C5CBE3",
    })
  })

  $(".tweet-container").on("mouseleave", function() {
    $(this).find(".logo").css( {
     "opacity": .6,
      "color": "black",
    })
  })

  $(".tweet-container").on("mouseenter", function() {
    $(this).find(".user").css( {
      "font-weight": "bold",
    })
  })

  $(".tweet-container").on("mouseleave", function() {
    $(this).find(".user").css( {
      "font-weight": "normal",
    })
  })

  $(".tweet-container").on("mouseenter", function() {
    $(this).find(".old-tweets").css( {
      "font-weight": "bold",
    })
  })

  $(".tweet-container").on("mouseleave", function() {
    $(this).find(".old-tweets").css( {
      "font-weight": "normal",
    })
  })

  $(".tweet-container").on("mouseenter", function() {
    $(this).find(".posted-time").css( {
      "font-weight": "bold",
    })
  })

  $(".tweet-container").on("mouseleave", function() {
    $(this).find(".posted-time").css( {
      "font-weight": "normal",
    })
  })

  $(".tweet-container").on("mouseenter", function() {
    $(this).find(".icons").css( {
      "color": "#C5CBE3"
    })
  })

  $(".tweet-container").on("mouseleave", function() {
    $(this).find(".icons").css( {
      "color": "#C5CBE3"
    })
  })

});