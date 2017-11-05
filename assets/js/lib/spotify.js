console.log(window.location);
var token = window.localStorage.getItem('token');
// max 20 songs
/* This is for testing only */

// var targetHeartRate = targetHeartRange(34, 3);


/* This is for testing only */



function getSongs(songOptions, callback){
    console.log('getting songs');

    var token = localStorage.getItem('token');

    var minTempo = songOptions.hr - songOptions.range;
    var maxTempo = songOptions.hr + rangsongOptions.rangee;

    var baseurl = 'https://api.spotify.com/v1/recommendations';
    var url = `${baseurl}?min_tempo=${minTempo}&seed_genres=${songOptions.genre}&max_tempo=${maxTempo}`;

    console.log('queryUrl: ' + url);

    $.ajax({
        url: url,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        success: function(res){
            console.log('got a reponse from spotify');
            callback(res);
        },
        error: function(err){
            console.log(err);
        }
    });
}


function spotifyAuth(){
    console.log("trying to auth");
    var baseUrl = 'https://accounts.spotify.com/authorize';

    var options = [];
    options.push('client_id=e42a332f9c9044748bcf6ae097bbe29d'); //Required. The client ID provided to you by Spotify when you register your application. 
    options.push('redirect_uri=https://bencbaumann.github.io/Heart-BPM/spotifycallback.html');  // Required. The URI to redirect to after the user grants/denies permission. This URI needs to be entered in the URI whitelist that you specify when you register your application. 
    options.push('response_type=token'); // Required. Set it to “token”. 
    // options.state =''; // Optional, but strongly recommended. The state can be useful for correlating requests and responses. Because your redirect_uri can be guessed, using a state value can increase your assurance that an incoming connection is the result of an authentication request. If you generate a random string or encode the hash of some client state (e.g., a cookie) in this state variable, you can validate the response to additionally ensure that the request and response originated in the same browser. This provides protection against attacks such as cross-site request forgery. See RFC-6749.
    options.push('scope=user-read-private user-read-email'); // Optional. A space-separated list of scopes: see Using Scopes. 
    // options.show_dialog = ''; //Optional. Whether or not to force the user to approve the app again if they’ve already done so. If false (default), a user who has already approved the application may be automatically redirected to the URI specified by redirect_uri. If true, the user will not be automatically redirected and will have to approve the app again.

    var qs = options.join('&');
    console.log(qs);

    var redirect = encodeURI(`${baseUrl}?${qs}`);

    console.log(redirect);
    window.location.replace(redirect);
    // window.location.href(redirect);
    // window.location = redirect;

}

if(!token){
    console.log("storing a token");
    storeToken();
}
else{
    console.log("we gotz a token");
}

function storeToken(){
    let token = window.location.hash.split('&')[0].split('=')[1];
    if(window.location.hash.includes('token')){
        localStorage.setItem('token', token);
        console.log(token);
        return token;
    }
    else {
        console.log("there's no token in the url");
    }
}

