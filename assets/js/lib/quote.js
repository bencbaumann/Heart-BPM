$(document).ready(function () {

    // generate quote as soon as page elements are fully loaded
    $(window).load(function () {

        // Failed to load https://api.forismatic.com/api/1.0/getQuote&key=&format=json&lang=en: Redirect from 'https://api.forismatic.com/api/1.0/getQuote&key=&format=json&lang=en' 
        // to 'http://forismatic.com/' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. 
        // Origin 'null' is therefore not allowed access.

        console.log("loaded");


        var queryURL = "http://api.forismatic.com/api/1.0/getQuote&key=457653&format=jsonp&lang=en";


        // function to get quote and show it on the page
        function showQuote(data) {

            // ajax uses queryURL to get random quote
            $.ajax({
                url: queryURL,
                method: "GET"
    
                // promise to return quote as response
            }).done(function (response) {

                // use var result to store the data object returned by response
                var result = response.data;
                console.log(result);

                // capture the quote in a variable called quote
                var quote = result.quoteText;
                console.log(quote);

                // capture the author in a variable called author
                var author = result.quoteAuthor;
                console.log(author);
            });
            
            // the below is for Connor to use to show the quote on the landing page as he sees fit

            // create a div for the quote and author
            // var quoteBox = $("<div>");

            // put the quote in the 
            // $(quotebox).append(quote);

            // put the author in the div
            // $(quotebox).append(author);

            // put the quote box on the landing page 
            // $("#landingpage").append(quotebox);

        }


    });

})