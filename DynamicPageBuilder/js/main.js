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
  }

  // Function to build the DOM and sets up event Listeners for the Image and next button
  buildDom() {
    console.log("building DOM");
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
