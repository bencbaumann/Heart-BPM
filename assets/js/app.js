var user = {};


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
        console.log('userAge' + user.age);
        user.weight = $("#weight").val().trim();
        console.log('userWeight' + user.weight);
        // this is not getting selected correctly
        user.gender = $("#gender option:selected").text();
        console.log('gender' + user.gender);
        user.genre = $("#genre option:selected").text();
        console.log('genre' + user.genre);


        // we will use our targetHeartrate to determine tempo of songs range to search in Spotify +-10
        var targetHeartRate = calculateTargetHeartRate(user.gender, user.age, user.weight, user.activity);
        console.log(targetHeartRate);


        var storeuser = JSON.stringify(user);

        window.localStorage.setItem("storeuser", storeuser);
        spotifyAuth();
        return false;

    }); // end form click/submit even

    // functionality for target heartrate + and - buttons

    var adjustedHeartRate = 0;

    $("#increaseHeartRate").on('click', function () {
        adjustedHeartRate = adjustedHeartRate + 1;
        $("#adjustedHeartRate").text(adjustedHeartRate);
    });


    $("#decreaseHeartRate").on('click', function () {
        adjustedHeartRate = adjustedHeartRate--;
        $("#adjustedHeartRate").text(adjustedHeartRate);
    });

    // get the final heart rate from heartview page
    if (sessionStorage.getItem("#view") === ("#heartview")) {
        user.targetHeartRate = $("#adjustedHeartRate");
    }


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