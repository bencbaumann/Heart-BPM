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

        // Use Doreens heartrate calculator!
        var targetHeartRate = calculateTargetHeartRate(userGender, userAge, userWeight, chosenActivity);
        console.log(targetHeartRate);

        // authenticate spotify => this moves us off our app page temporarily so 
        // we should store those user variables from above into local storage I think
        // here at some point
        spotifyAuth();

        
        /* These values are hard coded for now */
        var songOptions = {};
        songOptions.genre = 'heavy+metal';
        songOptions.hr = targetHeartRate; // except for this one!
        songOptions.range = 10;        

        /* *********************************** */

        getSongs(songOptions, function(songs){
            console.log('in the callback function');
            console.log(songs);
        });
      
    }); // end form click/submit event


  
}); // end document.ready


$('#submit').on('click', function(){
    spotifyAuth();
});
$('#getSongs').on('click', function(){
    var songOptions = {};
    songOptions.genre = 'heavy+metal';
    songOptions.hr = targetHeartRate; // except for this one!
    songOptions.range = 10;     
    getSongs(songOptions);
});
$('#deleteToken').on('click', function(){
    deleteToken();
});