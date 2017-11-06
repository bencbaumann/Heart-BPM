
$(document).ready(function () {
    $('.tap-target').tapTarget('open');
    $('select').material_select();

    var userAge = 0;
    var userWeight = 0;
    var userGender = "";
    var chosenActivity = "";
    var maximumHeartRate = 0;
    var targetHeartRate = 0;


    // gathering input info when submit button is clicked
    $("#metrics-form").submit("click", function () {
        event.preventDefault();

        // grab values from our UI
        userAge = $("#age").val().trim();
        console.log('userAge' + userAge);
        userWeight = $("#weight").val().trim();
        console.log('userWeight' + userWeight);
        userGender = $("#gender").val();
        console.log('userGender' + userGender);
        chosenActivity = ($('input[name=activity]:checked').val());
        console.log('userGender' + chosenActivity);
      
        // we will use our targetHeartrate to determine tempo of songs range to search in Spotify +-10
        var targetHeartRate = calculateTargetHeartRate(userGender, userAge, userWeight, chosenActivity);
        console.log(targetHeartRate);

        }); // end form click/submit event
                              


/* This stuff is just here for testing */  
  

$('#submit').on('click', function (e) {
    console.log('submitify');
    e.preventDefault();
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
  
  
}); // end document.ready

