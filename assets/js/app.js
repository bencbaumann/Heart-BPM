$(document).ready(function () {

    // gathering input info when submit button is clicked
    $("button").click(function () {

        // calculator for target heart rate based on inputs from form


        var maximumHeartrate = 0;
        var meditationHeartrate = 0;
        var moderateHeartrate = 0;
        var intenseHeartrate = 0;
        var targetHeartrate = 0;
        var userAge = 0;
        var userWeight = 0;
        var userGender = "";


        if (gender === female) {

            // maximum heart rate calculator for women - 211.415 and 0.05 are constants
            maximumHeartrate = 211.415 - (0.5 * userAge) - (0.05 * userWeight);

        }

        if (gender === male) {
            // maximum heart rate calculator with 4.5 added for men - 211.415, 0.05 and 4.5 are constants
            maximumHeartrate = 211.415 - (0.5 * userAge) - (0.05 * userWeight) + 4.5;

        }



        // if user chooses cardio workout 85% of maximum heart rate
        intenseHeartrate = maximumHeartrate * 85;

        // access music with bpm range from Spotify

        // if user chooses weightlifting/moderate workout 50% of maximum heart rate
        moderateHeartrate = maximumHeartrate * .50;

        // access music with bpm range from Spotify


        // if user chooses meditation/relaxation
        meditationHeartrate = 50;

        // access music with bpm range from Spotify





    });

})