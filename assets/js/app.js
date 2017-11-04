/* this is for debugging and will be removed from the app */

console.log(window.location.href);

/* ****************************************************** */


$('#submit').on('click', function(e){
    e.preventDefault();
    spotifyAuth();
});