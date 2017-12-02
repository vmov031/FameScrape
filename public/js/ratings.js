var actorArray = ["Brad Pitt"]; 

var actorSearchUrl = "https://theimdbapi.org/api/find/person?name=brad+pitt"; 

console.log(actorSearchUrl);

request(actorSearchUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log(JSON.parse(body)[0].image.poster);
  }
});

//actor array counter
var arrayCounter = actorArray.length + 1; 


// Grabbing text the user typed into the search input
//Use this line of code when adding new actors 


//grab pick from api 
//display
