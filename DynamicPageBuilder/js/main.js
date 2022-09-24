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

let movieNumber=0;

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
    this.movieTitle = document.createElement("p");
    this.movieTitle.setAttribute("id","title")
    this.movieTitle.innerHTML ="Title: ";
    // document.body.append(this.movieTitle);
    
    this.movieRating = document.createElement("p");
    this.movieRating.setAttribute("id","rating")
    this.movieRating.innerHTML ="Rating: ";
    // document.body.append(this.movieRating);

    this.movieDuration = document.createElement("p");
    this.movieDuration.setAttribute("id","duration")
    this.movieDuration.innerHTML ="Duration: ";
    // document.body.append(this.movieDuration);

// I have the button below in the buildDOm because the button variable needs to be created in where the event listner is.
    // HTML element for button
    this.button;


// is this supposed to be an image array
    // Image object; 107:50
    this.image = new Image();

      this.image.src= ["images/aliens.jpg"];
      this.image.alt="aliens movie poster";
      document.body.append(this.image);

// why do we need a second array of movies. i dont understand
    // Array to hold movie objects
    this.moviesArray = [];


    // Call functions
    this.createObjects();
    this.buildDom();
    this.showMovie();
  }

  // Function to create Movie objects and populate movie array MOVIE CLASS
  createObjects() {
    console.log("creating objects");
    let aliens = new Movie(movies[0].title,movies[0].rating,movies[0].duration,movies[0].imageFile)
    let matrix = new Movie(movies[1].title,movies[1].rating,movies[1].duration,movies[1].imageFile)
    let endgame = new Movie(movies[2].title,movies[2].rating,movies[2].duration,movies[2].imageFile)
    this.moviesArray.push(aliens);
    this.moviesArray.push(matrix);
    this.moviesArray.push(endgame);
    console.log(this.moviesArray);
  }

  // Function to build the DOM and sets up event Listeners for the Image and next button
  buildDom() {
    console.log("building DOM");
  }

  // This function updates the output to show the correct movie information and image
  // It should be called when next button is clicked and also initially so a movie is seen before button is clicked the first time
  //// 1:30:03
  showMovie() {
    console.log("show movie");

    document.body.append(this.movieTitle);
    document.body.append(this.movieRating);
    document.body.append(this.movieDuration);
    // Use utility class to convert times to 00:00 (hours:minutes) format

  }
}

// IIFE
(() => {
  const main = new Main();
})();



// let button = document.createElement("button");
// button.setAttribute("id","button");
// button.type="button";
// // btn type might need to be "submit"
// button.innerHTML="next";
// document.body.append(button);

// movieNumber++;

// // btn click handler
// btn.addEventListener("click", clickHandler);

// // btn function details
// // might need to rework textContent
// function clickHandler(){
//   if(movieNumber<moviesArray.length){
//     // title.textContent = movies[movieNumber];
//     console.log(moviesArray);
//   } else{
//     // reset
//     movieNumber = 0;
//     title.textContent=movies[movieNumber];
//   }
// }