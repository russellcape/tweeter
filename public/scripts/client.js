//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function

// Fake data taken from initial-tweets.json


$(document).ready(function() {

const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    $(".older-posts").prepend(createTweetElement(tweet))
  }
};

const createTweetElement = function(tweet) {
// const $tweet = $('<article.tweet-container>').addClass('tweet');

const markup = `
  <article class="tweet-container">
  <header class="tweet-header">
  <p class="logo"><img src="${tweet.user.avatars}"></p>
  <p class="user">${tweet.user.name}</p>
  <p class="post-poster">${tweet.user.handle}</p>
  </header>
  <p class="old-tweets">${tweet.content.text}</p>
  <footer class="tweet-footer">
  <p class="posted-time">${getTheCurrentTime(tweet.created_at)}</p>
  <div class="icons">
    <i class="fas fa-flag fa-xs"></i>
    <i class="fas fa-retweet fa-xs"></i>
    <i class="fas fa-heart fa-xs"></i>
  </div>
  </footer>
  </article>
  `;
  return markup;
}

const handleNewTweets = (function() {
  const form = $('.new-tweet-form');
  form.on('submit', function (event) {
    event.preventDefault();
    const formDataStr = $(this).serialize()
    const textContent = $('.tweet-text').val();
    //console.log(textContent)
    console.log('Button clicked, performing ajax call...');
    if (textContent === null || textContent === '') {  
      $('.error-short').slideToggle("slow", function() {
      });
      //alert("Your tweet must be at least 1 character")
    } else if (textContent.length > 140) {
        $('.error-long').slideToggle("slow", function() {
        });
      //alert("Your tweet is too long. It must be under 140 characters")
    } else {
      $.ajax({
        method: 'POST',
        url: '/tweets',
        data: formDataStr
      }).then(function (postedTweets) {
        $('.tweet-text').text();
        $('.counter').html(140);
        loadNewTweets(postedTweets);
      })
    }
  }) 
});
handleNewTweets()

const loadNewTweets = function() {
  $.ajax({
    url: `/tweets`,
    method: 'GET',
    dataType: "json",
    success: function (data) {
      console.log('Success: ', data);
      renderTweets(data);
      hoverActions()
    }
  })
};

const getTheCurrentTime = function(postDate) {
 const time = moment(postDate).fromNow()
  return time;
}

$( ".write-new-tweet" ).click(function() {
  $( ".new-tweet-form" ).slideToggle( "slow", function() {
    $(".tweet-text").focus()
  });
});

});




