// if a user exist in session storage grab it, else create an empty object.
var user = JSON.parse(window.localStorage.getItem('user')) || {};
console.log(user);
console.log(ui);

console.log(ui.view);
console.log(ui.view === 'heartbeat');
// get the final heart rate from heartview page
if(ui.view ==='heartbeat'){
    console.log('heartbeat view match');
    console.log(user.targetHeartRate);
    $('#adjustedHeartBeat').html(user.targetHeartRate);
}

// Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
db.ref('/playlist').on("value", function (snapshot) {
    console.log("got a resource from the DB!");
    var players = snapshotToArray(snapshot);
    players.forEach(function(playerObj) {
        var player = `<iframe src="https://open.spotify.com/embed?uri=${playerObj.player}" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>`;
        $('#players').append();
    });
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});

$(document).ready(function () {


    $('.activity').on('click', function () {
        user.activity = $(this).attr('data-activity');
    });


    $('.tap-target').tapTarget('open');

    $('select').material_select();


    // gathering input info when submit button is clicked
    $("#metrics-form").on('submit', function (event) {
        event.preventDefault();

        // grab values from our UI
        user.age = $("#age").val().trim();
        user.weight = $("#weight").val().trim();
        user.gender = $("#gender option:selected").text();
        user.genre = $("#genre option:selected").text();

        // we will use our targetHeartrate
        user.targetHeartRate = calculateTargetHeartRate(user.gender, user.age, user.weight, user.activity);

        console.log(user);

        window.localStorage.setItem("user", JSON.stringify(user));

        // temporarily disabling spotifyAuth();
        spotifyAuth();
        return false;

    }); // end form click/submit even

    // functionality for target heartrate + and - buttons

    var adjustedHeartRate = 0;

    $("#increaseHeartRate").on('click', function () {
        user.targetHeartRate++;
        $("#adjustedHeartBeat").text(user.targetHeartRate);
    });


    $("#decreaseHeartRate").on('click', function () {
        user.targetHeartRate--;
        $("#adjustedHeartBeat").text(user.targetHeartRate);
    });

    $('#recent').on('click', function (){
        ui.show('players');
    });
    $('#home').on('click', function(){
        ui.show('metrics');
    });

    /* This stuff is just here for testing */


    // $('#submit').on('click', function (e) {
    //     e.preventDefault();
    //     spotifyAuth();
    // });
    $('#getSongs').on('click', function (e) {
        e.preventDefault();
        /* this is +/- for Tempo */
        user.range = 10;
        getSongs(user, function (res) {
            console.log(res);
        });
    });
    // $('#deleteToken').on('click', function (e) {
    //     e.preventDefault();
    //     deleteToken();
    // });

    $('#getUser').on('click', function (e) {
        e.preventDefault();
        getUser();
    });

    $('#twitterauth').on('click', function (e) {
        e.preventDefault();
        twitter.authorize(function (res) {
            console.log(res);
        });
    });

    $('#tweet').on('click', function (e) {
        e.preventDefault();
        twitter.tweet(function (res) {
            console.log(res);
        });
    });


}); // end document.ready