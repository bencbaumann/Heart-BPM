

// function captures quote object from API forismatic.com
function parseQuote(response) {

    // capture the quote in a variable called quote
    var quote = response.quoteText;

    // capture the author in a variable called author
    var author = response.quoteAuthor;

    // SHOW QUOTE ON LANDING PAGE

    // create a div for the quote and author
    var quoteBox = $("<div>");

// create a signture line for the author and put the author's name in it
    var authorLine = $("<p>");
    $(authorLine).append(author);

    // put the quote in the div
    $(quoteBox).append(`<h4>"${quote}"</h4>`);
    
    // put the author in the div
    $(quoteBox).append(authorLine);

    // put the quote box on the landing page 
    $("#landingpage").append(quoteBox);
}

