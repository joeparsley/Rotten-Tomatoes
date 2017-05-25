// BACKEND
// MOVIE CONSTRUCTOR
var Movie = function(movieTitle, year, score) {
  this.movieTitle = movieTitle;
  this.year = year;
  this.score = score;
}
var Library = function () {
  this.movieArray = [];
}
// FRONTEND
$(document).ready(function(){
  var newLibrary = new Library();
  // submit button
  $("form#addMovie").submit(function(event){
    event.preventDefault();
    // collects user input
    var userMovie = $("input#movie").val();
    var userYear = $("input#year").val();
    var userScore = parseInt($("input#score").val());

    // stores in constructor
    var newMovie = new Movie(userMovie, userYear, userScore);

    newLibrary.movieArray.push(newMovie);

    $("tbody").append("<tr> <td>" + newMovie.movieTitle + "</td> <td>" + newMovie.year + "</td> <td>" + newMovie.score + "</td> </tr>");

    
  });

  $("#sortButton").click(function(event){
    event.preventDefault();
    // sorts The array
    var resultSortedArray = newLibrary.movieArray.sort(function(a,b){
      return b.score - a.score ;
    });

    $("tbody").empty();

    resultSortedArray.forEach(function(item){
      $("tbody").append("<tr> <td>" + item.movieTitle + "</td> <td>" + item.year + "</td> <td>" + item.score + "</td> </tr>");

    })

  });

});









// $("#sortButton").click(function(event){
//   event.preventDefault();
//   function sortTable() {
//     var table, rows, switching, i, x, y, shouldSwitch;
//     table = document.getElementsById('#movie-table');
//     switching = true;
//     while (switching) {
//       switching = false;
//       rows = table.getElementsByTagName("tr")
//       // loop through each rows
//       for (i = 1; i < (rows.length -1); i++) {
//         shouldSwitch = false;
//         x = rows[i].getElementsByTagName("td")[0];
//         y = rows[i + 1].getElementsByTagName("td")[0];
//
//         if (x.innerHTML > y.innerHTML) {
//           shouldSwitch = true;
//           break;
//         }
//       }
//       if (shouldSwitch) {
//         rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//         switching = true;
//       }
//     }
//   }
//   console.log(rows)
//   });
