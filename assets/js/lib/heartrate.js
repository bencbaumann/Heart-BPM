function calculateTargetHeartRate(userGender, userAge, userWeight, chosenActivity){
    var targetHeartrate = 0;

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
    
            console.log("maximumHeartRate: " + maximumHeartRate);
    
    
            
            console.log("chosenActivity: " + chosenActivity);
    
            // if user chooses high intensity/cardio workout then target is 85% of maximum heart rate
            if (chosenActivity === "HIIT/Cardio") {
    
                targetHeartrate = maximumHeartRate * .85;
    
                // if user chooses weightlifting/moderate workout then target is 50% of maximum heart rate
            } else if (chosenActivity === "weights") {
    
                targetHeartrate = maximumHeartRate * .50;
    
                // if user chooses meditation/relaxation then target is relaxed heart rate 70 BPM 
            } else {
                targetHeartRate = 70;
    
            }


        return targetHeartrate;

    }