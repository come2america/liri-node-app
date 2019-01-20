var TV= require("./liritv.js")
var mytv= new TV();
var Music= require("./lirimusic.js")
var mymusic= new Music();
var choices=[ "movie-this" , "spotify-this-song"]


var searchType = process.argv[2]

var searchTerm = process.argv.slice(3).join(" ")

if (!searchType) {
  
    searchType = choices[Math.floor(Math.random()*2)];
}
if (!searchTerm) {
    searchTerm = "Get Rich Or Die Tryin'";
}


require("dotenv").config();

if (searchType==="do-what-it-says") {
var fs= require ("fs")
fs.readFile("random.txt", "utf8", function(err, data){
  if (err) {
    return console.log(err);
  }
  var arr =data;

     
         
            console.log(arr)
        
        
    
    // for(var x =0 ; x < arr.length; x++){
    //     console.log(arr[x])}
    searchType==="spotify-this-song"
  console.log("Searching for song"); 
     mymusic.findmusic(arr)     
   })   
      
    }
      if(searchType === "movie-this") {
        console.log("Searching for Movie");
        mytv.findmovie(searchTerm)
    }
    else if(searchType === "spotify-this-song") {
        console.log("Searching for song");
        mymusic.findmusic(searchTerm)
    }
    
    