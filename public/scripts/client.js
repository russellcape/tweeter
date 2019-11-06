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

const renderTweets = function(tweets) {
  $(".older-posts").empty();
  tweets.forEach(data => {
    $(".older-posts").prepend(createTweetElement(data));
  });
  
// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
}

const createTweetElement = function(tweet) {
const $tweet = $('<article.tweet-container>').addClass('tweet');

const markup = `
<header class="tweet-header">
<p class="logo-user"><img src="${tweet.user.avatar}"></p>
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
  `;


return $tweet;
}

renderTweets(data);




/*
$(document).ready(function() {

const createTweetElement = function(tweetObj) {
  $tweet = $("<article>").addClass("tweet");
  let html = `
    <header>
      <img src=${tweetObj.user.avatars.small} alt="user-avatar"/>
      <h1>${tweetObj.user.name}</h1>
      <h2>${tweetObj.user.handle}</h2>
    </header>
    <div class="tweet-body">
      <p>
        ${tweetObj.content.text}
      </p>
    </div>
    <footer>
      <p>
      ${getTheCurrentTime(tweetObj.created_at)}
      </p>
      <span>
        <i class="fa fa-flag" aria-hidden="true"></i>
        <i class="fa fa-retweet" aria-hidden="true"></i>
        <i class="fa fa-heart" aria-hidden="true"></i>
      </span>
    </footer>
  `;
  $tweet = $tweet.append(html);
  return $tweet;
  }
  
});
  */