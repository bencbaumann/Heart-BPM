var twitter = {
  apikey: "xl82tzCBkcTPLjYWt7Dmxdq7q",
  secret: "3DpiW6nbTUqU1Rqt4YUjEoL8oEO7tN0d3lPOWm5BbgcL7yjBmp",
  callback: "https://bencbaumann.github.io/Heart-BPM/twittercallback.html",
  auth: "https://api.twitter.com/oauth/authorize",
  authorize: callback => {
      console.log('authorizing twitter');
    $.ajax({
      url: twitter.auth,
      method: "GET",
      headers: {
        Accept: "application/json"
      },
      success: function(reponse) {
        callback(response);
      },
      error: function(err) {
        console.log(err);
      }
    });
  },
  tweet: callback => {
    console.log('posting a tweet');
    $.ajax({
      url: twitter.auth,
      method: "GET",
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: "application/json"
      },
      success: function(reponse) {
        callback(response);
      },
      error: function(err) {
        console.log(err);
      }
    });
  }
};
