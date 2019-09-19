

//var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + search + '&begin_date=' + startYear + '&end_date=' + endYear + '&page=' + records + '&api-key=6LoiXRrJMPCReXvZfvbXrIR00TSQrZmZ';


//var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=bootcamp&api-key=6LoiXRrJMPCReXvZfvbXrIR00TSQrZmZ';

console.log(search);
$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    var search = $("#search").val().trim(); //q=
    var records = $("#records").val().trim(); //how many records we want to pull
    var startYear = $("#year-start").val().trim(); //begin_date
    var endYear = $("#year-end").val().trim(); //end_date
    var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + search + '&api-key=7k6XxD6GYQhFRcAgiPVZHIWPiBxScAUh';
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(nytimes){
    
    var results = nytimes.response.docs[0];
    
        var articleDiv = $('<div>');
        var headline = $('<p>').text(results.headline.main);
        articleDiv.append(headline);
        $('.articles').prepend(articleDiv);
    

});
    
});


$("#clearBtn").on("click", function() {
    $("#search").empty();
});
