


var TV = function () {
    
    this.findmovie = function (movie) {
        var url = `http://www.omdbapi.com/?t="${movie}"&y=&plot=short&apikey=trilogy`;



            var axios = require("axios");

            // Then run a request with axios to the OMDB API with the movie specified Title of the movie.
//   * Year the movie came out.
//   * IMDB Rating of the movie.
//   * Rotten Tomatoes Rating of the movie.
//   * Country where the movie was produced.
//   * Language of the movie.
//   * Plot of the movie.
//   * Actors in the movie


            axios.get(url)
                .then(function (response) {
                    // console.log(response.data);
                    console.log("The movie's Title is: " + response.data.Title);
                    console.log("The movie's IMDB rating is: " + response.data.imdbRating);
                    console.log("The movie's Rotten Tomatoes rating is: " + response.data.Ratings[1].Value);
                    console.log("The movie's Counrty is: " + response.data.Country)
                    console.log("The movie's Language is: " + response.data.Language)
                    console.log("The movie's Plot is: " + response.data.Plot)
                    console.log("The movie's Actors is: " + response.data.Actors)
               
               
                })
            }}
            module.exports = TV;



