// max 20 songs
/* This is for testing only */

// var genre = 'country';
// var hb = 135;
// var range = 10;

// var targetHeartRate = targetHeartRange(34, 3);
// getSongs(genre,targetHeartRate, 15, function({playlist: playlistObj: songs: array}){
//     // update the dom
//     console.log(songs);
// });


/* This is for testing only */



// function getSongs(genre, hb, range, callback){

//     var url = '';

//     console.log(queryURL);

//     $.ajax({
//         url: url,
//         method: 'GET',
//         success: function(res){

//             callback(res);
//         },
//         error: function(err){
//             console.log(err);
//         }
//     });
// } 

spotifyAuth();
function spotifyAuth(){
    console.log("trying to auth");
    var baseUrl = 'https://accounts.spotify.com/authorize';

    var options = [];
    options.push('client_id=e42a332f9c9044748bcf6ae097bbe29d'); //Required. The client ID provided to you by Spotify when you register your application. 
    options.push('redirect_uri=http://localhost:8080/callback.html');
    options.push('response_type=token'); // Required. Set it to “token”. 
     // Required. The URI to redirect to after the user grants/denies permission. This URI needs to be entered in the URI whitelist that you specify when you register your application. 
    // options.state =''; // Optional, but strongly recommended. The state can be useful for correlating requests and responses. Because your redirect_uri can be guessed, using a state value can increase your assurance that an incoming connection is the result of an authentication request. If you generate a random string or encode the hash of some client state (e.g., a cookie) in this state variable, you can validate the response to additionally ensure that the request and response originated in the same browser. This provides protection against attacks such as cross-site request forgery. See RFC-6749.
    options.push('scope=user-read-private user-read-email'); // Optional. A space-separated list of scopes: see Using Scopes. 
    // options.show_dialog = ''; //Optional. Whether or not to force the user to approve the app again if they’ve already done so. If false (default), a user who has already approved the application may be automatically redirected to the URI specified by redirect_uri. If true, the user will not be automatically redirected and will have to approve the app again.

    var qs = options.join('&');
    console.log(qs);

    var redirect = encodeURI(`${baseUrl}?${qs}`);

    console.log(redirect);
    // window.location = encodeURIComponent(redirect);


}




    

    // https://accounts.spotify.com/authorize?client_id=5fe01282e94241328a84e7c5cc169164&redirect_uri=http:%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&response_type=token&state=123

    // $.ajax({
    //     url: url,
    //     method: 'GET',
    //     header: {
    //         'Access-Control-Allow-Origin': '*'
    //     },
    //     success: function(res){
    //         console.log("sucesss");
    //         callback(res);
    //     },
    //     error: function(err){
    //         console.log("err");
    //         console.log(err);
    //     }
    // });
