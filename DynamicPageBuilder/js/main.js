// Movies data, array of objects
const movies = [
  {
    title: "Aliens",
    rating: "R",
    duration: 127,
    imageFile: "aliens.jpg",
  },
  {
    title: "Matrix",
    rating: "PG",
    duration: 200,
    imageFile: "matrix.jpg",
  },
  {
    title: "Endgame",
    rating: "PG-13",
    duration: 188,
    imageFile: "endgame.jpg",
  },
];

// Movie class
class Movie {
  constructor(title, rating, duration, image) {
    // Create properties here
    this.title=title;
    this.rating=rating;
    this.duration=duration;
    this.image=image;
  }

}

// Main class
class Main {
  constructor() {
    console.log("main started");
    // Properties - You should not need more than what is listed here,
    // But you are allowed to change them if needed

    // HTML elements to hold movie information (title, rating, duration)
    this.movieTitle;
    this.movieRating;
    this.movieDuration;

    // HTML element for button
    this.button;

    // Variable to track the current movie being shown
    this.movieNumber = 0;

    // Image object;
    this.image = new Image();

    // Array to hold movie objects
    this.moviesArray = [];

    // Call functions
    this.createObjects();
    this.buildDom();
    this.showMovie();
  }

  // Function to create Movie objects and populate movie array
  createObjects() {
    console.log("creating objects");
    for (let i = 0; i < movies.length; i++) {
      // text += cars[i] + "<br>";
      // console.log(movies[i].title,movies[i].rating,movies[i].duration,movies[i].imageFile)
      // let aliens = new Movie(movies[0].title,movies[0].rating,movies[0].duration,movies[0].imageFile)
      // let matrix = new Movie(movies[1].title,movies[1].rating,movies[1].duration,movies[1].imageFile)
      // let endgame = new Movie(movies[2].title,movies[2].rating,movies[2].duration,movies[2].imageFile)
      var x = new Movie(movies[i].title,movies[i].rating,movies[i].duration,movies[i].imageFile)
      // console.log(x);
      this.moviesArray.push(x);
      
    }

    // console.log(this.moviesArray)
  }

  // Function to build the DOM and sets up event Listeners for the Image and next button
  buildDom() {
    console.log("building DOM");

    this.createMovieBlock( this.moviesArray[0])

    for (let i = 0; i < this.moviesArray.length; i++) {
    }

    // const newDiv = document.createElement("div");
    // const newContent = document.createTextNode("Hi there and greetings!");
    // newDiv.appendChild(newContent);
    // const currentDiv = document.getElementById("div1");
    // document.body.insertBefore(newDiv, currentDiv);
  }

  createMovieBlock(movie){
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode(movie.title);
    newDiv.appendChild(newContent);
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
  }

  // This function updates the output to show the correct movie information and image
  // It should be called when next button is clicked and also initially so a movie is seen before button is clicked the first time
  showMovie() {
    console.log("show movie");
    // Use utility class to convert times to 00:00 (hours:minutes) format
  }
}

// IIFE
(() => {
  const main = new Main();
})();
