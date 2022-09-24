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
      var x = new Movie(movies[i].title,movies[i].rating,movies[i].duration,movies[i].imageFile)
      this.moviesArray.push(x);
    }
  }

  // Function to build the DOM and sets up event Listeners for the Image and next button
  buildDom() {
    console.log("building DOM");
   

    // adding div to display content. 
    let trayDiv = document.createElement("div");
    trayDiv.id = 'movietray';
    trayDiv.classList.add('container-fluid','lead','m-3')
    document.body.appendChild(trayDiv);

    this.image.classList.add('img-fluid','img-thumbnail','mb-3')
    trayDiv.appendChild(this.image);

    let title = document.createElement("p");
    title.id = 'title';
    trayDiv.appendChild(title);

    let rating = document.createElement("p");
    rating.id = 'rating';
    trayDiv.appendChild(rating);

    let duration = document.createElement("p");
    duration.id = 'duration';
    trayDiv.appendChild(duration);



     // adding a buttton
     const app = this; 
     let btn = document.createElement("button");
     btn.innerHTML = "Next";
     btn.classList.add('btn','btn-lg', 'btn-primary')
     // adding click event 
     btn.onclick = function () {
       app.showMovie()
     };
     trayDiv.appendChild(btn);


     document.body.classList.add('container')
   
  }

  // This function updates the output to show the correct movie information and image
  // It should be called when next button is clicked and also initially so a movie is seen before button is clicked the first time
  showMovie() {
    console.log('Show Movies')

    // CHECK THAT MOVIE NUMBER IS IN RANGe 
    if(this.movieNumber > this.moviesArray.length - 1 ){
      this.movieNumber = 0; 
    }


    var movie = this.moviesArray[this.movieNumber]

    this.movieTitle = movie.title
    this.movieDuration = movie.duration
    this.movieRating = movie.rating

    var title = document.getElementById('title')
    var rating = document.getElementById('rating')
    var duration = document.getElementById('duration')
    title.innerHTML = this.movieTitle;
    rating.innerHTML = this.movieRating;
    duration.innerHTML = Utils.convertTime(this.movieDuration);
    this.image.src = 'images/'+ this.moviesArray[this.movieNumber ].image

    // increment movie number
    this.movieNumber++;
        

  }
}

// IIFE
(() => {
  const main = new Main();
})();
