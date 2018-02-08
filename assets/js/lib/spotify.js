var spotify = {};
var token = window.sessionStorage.getItem('token');

function spotifyAuth(){
    console.log("trying to auth");
    var baseUrl = 'https://accounts.spotify.com/authorize';

    var options = [];
    options.push('client_id=e42a332f9c9044748bcf6ae097bbe29d'); //Required. The client ID provided to you by Spotify when you register your application. 
    options.push('redirect_uri=https://bencbaumann.github.io/Heart-BPM/spotifycallback.html');  // Required. The URI to redirect to after the user grants/denies permission. This URI needs to be entered in the URI whitelist that you specify when you register your application. 
    options.push('response_type=token'); // Required. Set it to “token”. 
    options.push('show_dialog=true');
    // options.state =''; // Optional, but strongly recommended. The state can be useful for correlating requests and responses. Because your redirect_uri can be guessed, using a state value can increase your assurance that an incoming connection is the result of an authentication request. If you generate a random string or encode the hash of some client state (e.g., a cookie) in this state variable, you can validate the response to additionally ensure that the request and response originated in the same browser. This provides protection against attacks such as cross-site request forgery. See RFC-6749.
    options.push('scope=user-read-private user-read-email playlist-modify-public playlist-modify-private'); // Optional. A space-separated list of scopes: see Using Scopes. 
    // options.show_dialog = ''; //Optional. Whether or not to force the user to approve the app again if they’ve already done so. If false (default), a user who has already approved the application may be automatically redirected to the URI specified by redirect_uri. If true, the user will not be automatically redirected and will have to approve the app again.

    var qs = options.join('&');
    console.log(qs);

    var redirect = encodeURI(`${baseUrl}?${qs}`);

    console.log(redirect);
    window.location.replace(redirect);
}


function getSongs(appuser, callback){
    Materialize.toast('Getting Songs', 500,'');
    console.log('getting songs!');

    var token = window.sessionStorage.getItem('token');
    console.log(token);

    var minTempo = Math.round(appuser.targetHeartRate - appuser.range);
    var maxTempo = Math.round(appuser.targetHeartRate + appuser.range);

    var baseurl = 'https://api.spotify.com/v1/recommendations';
    var url = `${baseurl}?min_tempo=${minTempo}&seed_genres=${appuser.genre.toLowerCase()}&max_tempo=${maxTempo}`;

    console.log('queryUrl: ' + url);

    $.ajax({
        url: url,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        success: function(tracks){
            spotify.tracks = tracks;
            Materialize.toast('Got Songs', 500,'');
            console.log('got songs from spotify');
            console.log(tracks);
            getUser(function(user){
                spotify.user = user;
                console.log('user & songs both in scope and both callback ified');
                var playlist = {};
                createPlaylist(user, playlist, appuser, function(playlist){
                    Materialize.toast('Creating Playlist', 500,'');
                    spotify.playlist = playlist;
                    console.log(playlist);
                    console.log(spotify);
                    addTracksToPlaylist(spotify, function(res){
                        Materialize.toast('Adding Songs to Playlist', 500,'');
                        console.log(res);
                        createPlayer(spotify, appuser);
                        Materialize.toast('Create Player', 500,'');
                    });
                });

            });
            callback(tracks);
        },
        error: function(err){
            console.log(err);
        }
    });
}

function getUser(callback){
    console.log('getting user!');

    var token = window.sessionStorage.getItem('token');

    var baseurl = 'https://api.spotify.com/v1/';
    var url = `${baseurl}me`;

    console.log('queryUrl: ' + url);

    $.ajax({
        url: url,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        success: function(user){
            window.localStorage.setItem('userId', user.id);
            console.log('got a reponse from spotify user resource');
            callback(user);
        },
        error: function(err){
            console.log(err);
        }
    });
}

function createPlayer(spotify, appuser){
    let player = `<iframe src="https://open.spotify.com/embed?uri=${spotify.playlist.uri}" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>`;
    $('#playlist').append(player);
    let obj = {};
    obj.player = spotify.playlist.uri;
    obj.genre = appuser.genre;
    obj.activity = appuser.activity;
    db.ref('/playlist').push(obj);
}

function createPlaylist(user, playlist, appuser, callback){
    console.log('getting songs!');
    
        var token = window.sessionStorage.getItem('token');
    
        playlist.description = `Workout Playlist for ${appuser.activity}`;
        playlist.public = true;
        playlist.name = `${appuser.genre} Workout Playlist by Heart Beatz`;
    
        var url = `https://api.spotify.com/v1/users/${user.id}/playlists`;
    
        console.log('queryUrl: ' + url);

        $.ajax({
            url: url,
            method: 'POST',
            data: JSON.stringify(playlist),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            success: function(playlist){
                console.log('created a playlist on spotify');
                callback(playlist);
            },
            error: function(err){
                console.log(err);
            }
        });
}

function addTracksToPlaylist(spotify, callback){
        console.log('getting songs!');

        var token = window.sessionStorage.getItem('token');
    
        var data = {};
        data.uris = "uris="+spotify.tracks.tracks.map( track => track.uri).join(',').replace(/:/g, '%3A');
        // var uris = encodeURI('uris=' + spotify.tracks.tracks.map( track => track.uri).join(','));

        console.log(data.uris);

        // console.log(data.tracks);
    
        var url = `https://api.spotify.com/v1/users/${spotify.user.id}/playlists/${spotify.playlist.id}/tracks?${data.uris}`;
    
        console.log('queryUrl: ' + url);

        $.ajax({
            url: url,
            method: 'POST',
            // data: data.uris,
            dataType: 'text',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            success: function(res){
                console.log('added songs to playlist on spotify');
                callback(res);
            },
            error: function(err){
                console.log(err);
            }
        });
}

function deleteToken(){
    console.log('deleting the token');
    window.sessionStorage.clear();
}
