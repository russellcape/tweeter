//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function

// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

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

renderTweets(data);

});


