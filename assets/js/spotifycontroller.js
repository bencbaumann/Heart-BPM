
$(document).ready(function () {

    /* This stuff is just here for testing */  

    $( "#target" ).submit(function( event ) {
        event.preventDefault();
    });
    

    $('#submit').on('click', function (e) {
        e.preventDefault();
        console.log('submitify');
        spotifyAuth();
    });

    $('#getSongs').on('click', function(e){
        e.preventDefault();
        // hardcoded for now
        var songOptions = {};
        songOptions.genre = 'ambient';
        songOptions.hr = 130;
        songOptions.range = 10;     
        getSongs(songOptions, function(res){
            console.log(res);
        });
    });
    $('#deleteToken').on('click', function(e){
        e.preventDefault();
        deleteToken();
    });

    $('#getUser').on('click', function(e){
        e.preventDefault();
        getUser();
    });
  
    $('#createPlayer').on('click', function(e){
        e.preventDefault();
        createPlayer();
    });
  
}); // end document.ready

