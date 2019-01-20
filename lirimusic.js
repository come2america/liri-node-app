var Spotify = require('node-spotify-api');


var spotify = new Spotify({
    id:"df441369013d40cfb3d63facf40e14c9",
    secret:"c662dc9275c946b2a5f7890fb8a6f437",
  });

  var Music = function () {
    
    this.findmusic = function (music) {  

spotify
.search({ type: 'track', query: music , limit: 1})
.then(function(response) {
console.log(response.tracks.items[0].album.artists[0].name);
console.log(response.tracks.items[0].name);
  console.log(response.tracks.items[0].preview_url);
  console.log(response.tracks.items[0].album.name);

})
.catch(function(err) {
console.log(err);
});   
  
      
}    
}

// if(process.argv[2]==="do-what-it-says"){
//     spotify
// .search({ type: 'track', query:( process.argv[3]=arr.slice(0)) , limit: 1})
// .then(function(response) {
// console.log(response.tracks.items[0].album.artists[0].name);
// console.log(response.tracks.items[0].name);
// console.log(response.tracks.items[0].preview_url);
// console.log(response.tracks.items[0].album.name);

// })
// .catch(function(err) {
// console.log(err);
// });   


module.exports = Music;