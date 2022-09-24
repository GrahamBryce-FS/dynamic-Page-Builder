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

    // adding a buttton
    const app = this; 
    let btn = document.createElement("button");
    btn.innerHTML = "Next";
    btn.onclick = function () {
      // alert("Button is clicked");
      // showMovie()
      // main.showMovie()
      // console.log(app)
      app.showMovie()

    };
    document.body.appendChild(btn);


    let trayDiv = document.createElement("div");
    trayDiv.id = 'movietray';

    document.body.appendChild(trayDiv);



    let imgTray = document.createElement("img");
    imgTray.id = 'imgTray';
    trayDiv.appendChild(imgTray);


    let title = document.createElement("p");
    title.id = 'title';
    trayDiv.appendChild(title);

    let rating = document.createElement("p");
    rating.id = 'rating';
    trayDiv.appendChild(rating);

    let duration = document.createElement("p");
    duration.id = 'duration';
    trayDiv.appendChild(duration);
   


    //// Add a movie tray  




    // let btn = document.createElement("button");
    // btn.innerHTML = "Click Me";
    // document.body.appendChild(btn);


    // this.createMovieBlock(this.moviesArray[0])

    // for (let i = 0; i < this.moviesArray.length; i++) {
    // }

    // const newDiv = document.createElement("div");
    // const newContent = document.createTextNode("Hi there and greetings!");
    // newDiv.appendChild(newContent);
    // const currentDiv = document.getElementById("div1");
    // document.body.insertBefore(newDiv, currentDiv);
  }

  fillInvars(){
    // var newDiv = document.createElement("div");
    // var newContent = document.createTextNode(movie.title);
    // newDiv.appendChild(newContent);
    // var currentDiv = document.getElementById("div1");
    // document.body.insertBefore(newDiv, currentDiv);
    console.log('Fill in vars')

    this




  }

  // This function updates the output to show the correct movie information and image
  // It should be called when next button is clicked and also initially so a movie is seen before button is clicked the first time
  showMovie() {
    // console.log('Show Movies')
    // console.log(this.movieNumber)
    // console.log(this.moviesArray.length)

    if(this.movieNumber > this.moviesArray.length - 1 ){
      this.movieNumber = 0; 
    }

    // console.log()

    var movie = this.moviesArray[this.movieNumber]
    // console.log(movie)
    this.movieTitle = movie.title
    this.movieDuration = movie.duration
    this.movieRating = movie.rating

    // this.image.src = movie.imageFile

    // console.log(this.movieTitle)
    // console.log(this.movieDuration)
    // console.log(this.movieRating)


    // console.log("show movie");

    // update current movie index//
    // update dom with correct info 

    // Use utility class to convert times to 00:00 (hours:minutes) format
    this.movieNumber++;
    
    // if(this.movieNumber > this.moviesArray.length){
    //   this.movieNumber = 0; 
    // }


    ////

    this.fillInvars()

  }
}

// IIFE
(() => {
  const main = new Main();
})();
