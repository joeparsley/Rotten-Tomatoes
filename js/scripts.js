// BACKEND


// MOVIE CONSTRUCTOR
var Movie = function(movieTitle, year, score) {
  this.movieTitle = movieTitle;
  this.year = year;
  this.score = score;

}

// Prototypes



// FRONTEND
$(document).ready(function(){
  // submit button
  $("form#addMovie").submit(function(event){
    event.preventDefault();
    // collects user input
    var userMovie = $("input#movie").val();
    var userYear = parseInt($("input#year").val());
    var userScore = parseInt($("input#score").val());

    // stores in constructor
    var newMovie = new Movie(userMovie, userYear, userScore);
    $("tbody").append("<tr> <td>" + newMovie.movieTitle + "</td> <td>" + newMovie.year + "</td> <td>" + newMovie.score + "</td> </tr>");

    console.log(userMovie);
    console.log(userYear);
    console.log(userScore);
    console.log(newMovie);


  });




});
