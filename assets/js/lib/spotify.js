// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;

// const { window } = new JSDOM(`...`);
// var $ = require("jquery")(window);

/* This is for testing only */
var genre = 'country';
var hb = 135;
var range = 10;

// getSongs(genre,hb, range, function(songs){
//     // update the dom
//     console.log(songs);
// });

spotifyAuth();
/* This is for testing only */



function getSongs(genre, hb, range, callback){

    var url = '';

    console.log(queryURL);

    $.ajax({
        url: url,
        method: 'GET',
        success: function(res){

            callback(res);
        },
        error: function(err){
            console.log(err);
        }
    });
} 

function spotifyAuth(){
    
    var url = 'https://accounts.spotify.com/authorize';

    var client_id = 'e42a332f9c9044748bcf6ae097bbe29d'; //Required. The client ID provided to you by Spotify when you register your application. 
    var response_type 'token'; // Required. Set it to “token”. 
    var redirect_uri = 'http://localhost.com/:8080'; // Required. The URI to redirect to after the user grants/denies permission. This URI needs to be entered in the URI whitelist that you specify when you register your application. 
    var state =''; // Optional, but strongly recommended. The state can be useful for correlating requests and responses. Because your redirect_uri can be guessed, using a state value can increase your assurance that an incoming connection is the result of an authentication request. If you generate a random string or encode the hash of some client state (e.g., a cookie) in this state variable, you can validate the response to additionally ensure that the request and response originated in the same browser. This provides protection against attacks such as cross-site request forgery. See RFC-6749.
    var scope =''; // Optional. A space-separated list of scopes: see Using Scopes. 
    var show_dialog = ''; //Optional. Whether or not to force the user to approve the app again if they’ve already done so. If false (default), a user who has already approved the application may be automatically redirected to the URI specified by redirect_uri. If true, the user will not be automatically redirected and will have to approve the app again.

    $.ajax({
        url: url,
        method: 'GET',
        success: function(res){
            callback(res);
        },
        error: function(err){
            console.log(err);
        }
    });
}

