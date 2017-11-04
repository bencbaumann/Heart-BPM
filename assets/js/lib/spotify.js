// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;

// const { window } = new JSDOM(`...`);
// var $ = require("jquery")(window);

/* This is for testing only */
var genre = 'country';
var hb = 135;
var range = 10;
/* This is for testing only */

getSongs(genre,hb, range, function(songs){
    // update the dom
    console.log(songs);
});

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
    
}