//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function

// Fake data taken from initial-tweets.json


$(document).ready(function() {

const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    $(".older-posts").append(createTweetElement(tweet))
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
  <p class="posted-time">${tweet.created_at}</p>
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
    console.log('Button clicked, performing ajax call...');
    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: formDataStr
    }).then(function (postedTweets) {
      $('.new-tweet-form').val('');
      $('.counter').html(140);
      loadNewTweets(postedTweets);
    })
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

});


