$(document).ready(function () {
    $('#twitterauth').on('click', function (e) {
        e.preventDefault();
        twitter.authorize();
    });
});