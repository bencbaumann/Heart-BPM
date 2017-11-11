// if a user exist in session storage grab it, else create an empty object.
var user = JSON.parse(window.localStorage.getItem('user')) || {};
console.log(user);

console.log(ui.view === 'heartbeat');
// get the final heart rate from heartview page
if (ui.view === 'heartbeat') {
    $('#adjustedHeartBeat').html(user.targetHeartRate);
    ui.show('heartbeat');
}

// Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
db.ref('/playlist').limitToLast(3).on("value", function (snapshot) {
    console.log("got a resource from the DB!");
    let players = snapshotToArray(snapshot);
    players.forEach(function (playerObj) {
        console.log(playerObj);
        let player = `<iframe src="https://open.spotify.com/embed?uri=${playerObj.player}" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>`;
        let div = $(`<div class="media col s12 m4 left" style="text-align:center;">`);
        div.append(`<h4>${playerObj.genre} playlist <br> for ${playerObj.activity}`);
        div.append(player);
        $('#players').append(div);
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

    $("#increaseHeartRate").on('click', function () {
        user.targetHeartRate++;
        $("#adjustedHeartBeat").text(user.targetHeartRate);
    });


    $("#decreaseHeartRate").on('click', function () {
        user.targetHeartRate--;
        $("#adjustedHeartBeat").text(user.targetHeartRate);
    });

    // this shows the repeating players view
    $('#recent').on('click', function () {
        ui.show('players');
    });

    $('#aboutbtn').on('click', function () {
        ui.show('about');
    });

    // returns us to the home view, needs to be updated to landing page.
    $('#home').on('click', function () {
        ui.show('landing');
    });
    $('#start').on('click', function () {
        ui.show('metrics');
    });

    //This happens when we click the music icon
    $('#getSongs').on('click', function (e) {
        e.preventDefault();
        /* this is +/- for Tempo */
        user.range = 10;
        getSongs(user, function (res) {
            console.log(res);
        });
    });

    $('.activity').click(function () {
        $.each($('.activity'), function( index, value ) {
            var el = $(value);
            el.removeClass('clicked');
            el.parent().removeClass('clicked');
        });
        $(this).parent().addClass('clicked');
        $(this).addClass('clicked');
    });

    // $('.material-icons').click(function () {
    //     $(this).addClass('clicked');
    // });

}); // end document.ready