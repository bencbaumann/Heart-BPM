$(document).ready(function () {
    $('#twitterauth').on('click', function (e) {
        e.preventDefault();
        console.log('twitterauth click');
        twitter.authorize();
    });
});