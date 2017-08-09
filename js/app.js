$(document).ready(function() {
  //Get a random quote when website has finished loading
  getQuote();
  //Assign variables at top, so they can be used by newQuote function and Twitter Sharing button
  var quote;
  var author;

  var fadeTime = 500;

  //Core function
  function getQuote() {



    //get forismatic api to fetch quotes
    var api="https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    //get Data
    $.getJSON(api, function(data) {

      //set quote and author variables
      quote = '"' + data.quoteText.trim() + '"';
      if(data.quoteAuthor == "") {
         author = '- Unknown author';
         } else {
           author = '- ' + data.quoteAuthor.trim();
         }

      //change html of h2 and h4
        $("#quoteBox>h2").text(quote);
        $("#quoteBox>h4").text(author);
        $("#quoteBox>h2, #quoteBox>h4").fadeIn(fadeTime);
    });
  }
//OnClick events for new quote and twitter sharing

  $("#tweet").on("click", function() {
    window.open("https:www.twitter.com/intent/tweet?text=" + quote + "   " + author);
  });

  $("#newQuote").on("click", function() {
    $("#quoteBox>h2, #quoteBox>h4").fadeOut(fadeTime);
    setTimeout(getQuote, fadeTime);
  });


});
