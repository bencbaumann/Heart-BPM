// Initialize Firebase
var config = {
    apiKey: "AIzaSyDsehiHoo9Y3zY2yzS5cdayNot4ISX7QjE",
    authDomain: "hello-world-3b2c5.firebaseapp.com",
    databaseURL: "https://hello-world-3b2c5.firebaseio.com",
    projectId: "hello-world-3b2c5",
    storageBucket: "hello-world-3b2c5.appspot.com",
    messagingSenderId: "721569458570"
};
firebase.initializeApp(config);

$(document).ready(function () {
    $('.tap-target').tapTarget('open');
    $('select').material_select();
    $('.modal').modal();


    var name = "";
    var email = "";
    var password = "";


    $("#signup-form").submit("click", function () {
        event.preventDefault();

        //set variables
        name = $("#first_name").val() + " " + $("#last_name").val();
        email = $("#email").val();
        password = $("#password").val();

        console.log(name);
        console.log(email);

        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            $("#error_message").text(errorMessage);
            $('.modal').modal('open');
        });


    });



});