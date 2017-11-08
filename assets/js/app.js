// if a user exist in session storage grab it, else create an empty object.
var user = JSON.parse(window.localStorage.getItem('user')) || {};
console.log(user);

// get the final heart rate from heartview page
if(ui.state ==='heartbeat'){
    $('#adjustedHeartBeat').html(user.targetHeartRate);
}

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
        // spotifyAuth();
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


    /* This stuff is just here for testing */


    // $('#submit').on('click', function (e) {
    //     e.preventDefault();
    //     spotifyAuth();
    // });
    $('#getSongs').on('click', function (e) {
        e.preventDefault();
        // hardcoded for now
        var songOptions = {};
        songOptions.genre = 'ambient';
        songOptions.hr = 130;
        songOptions.range = 10;
        getSongs(songOptions, function (res) {
            console.log(res);
        });
    });
    $('#deleteToken').on('click', function (e) {
        e.preventDefault();
        deleteToken();
    });

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