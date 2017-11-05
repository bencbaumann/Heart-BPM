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

        userAge = $("#age").val().trim();
        console.log(userAge);
        userWeight = $("#weight").val().trim();
        console.log(userWeight);
        userGender = $("#gender").val();
        console.log(userGender);

        // calculator for target heart rate based on inputs from form
        if (userGender === "male") {

            // maximum heart rate calculator with 4.5 added for men - 211.415, 0.5,  0.05 and 4.5 are constants
            // formula developed by Dr. Dan Heil
            maximumHeartRate = 211.415 - (0.5 * userAge) - (0.05 * userWeight) + 4.5;

        } else {
            // maximum heart rate calculator for women - 211.415, 0.5 and 0.05 are constants (we are including "prefer not to say" with this group)
            // formula developed by Dr. Dan Heil
            maximumHeartRate = 211.415 - (0.5 * userAge) - (0.05 * userWeight);

        }

        console.log(maximumHeartRate);


        chosenActivity = ($('input[name=activity]:checked').val());
        console.log(chosenActivity);

        // if user chooses high intensity/cardio workout then target is 85% of maximum heart rate
        if (chosenActivity === "HIIT/Cardio") {

            targetHeartrate = maximumHeartRate * 85;

            // if user chooses weightlifting/moderate workout then target is 50% of maximum heart rate
        } else if (chosenActivity === "weights") {

            targetHeartrate = maximumHeartRate * .50;

            // if user chooses meditation/relaxation then target is slow heart rate to 
        } else {
            targetHeartRate = 50;

        }
    });


    
    console.log(targetHeartRate);


    // we will use our targetHeartrate to determine tempo of songs range to search in Spotify +-10







})
/* this is for debugging and will be removed from the app */

console.log(window.location.href);

/* ****************************************************** */


$('#submit').on('click', function(e){
    e.preventDefault();
    spotifyAuth();
});