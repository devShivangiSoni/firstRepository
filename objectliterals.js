const movie = {
  title: "The Avengers",
  year: 2012,
  genre: "Action,Sci-Fi,Thiller",
  cast: { mainLead: "Robert Dowmey Jr.", other: "Chris Evans" },
  getDetails() {
    console.log(
      `Title: ${this.getTitleName()}\nYear: ${this.year}\nGenre: ${
        this.genre
      }\nCast: ${this.cast.mainLead}`
    );
  },
  getMovieDetails(detail) {
    console.log(movie[detail]);
  },

  getTitleName() {
    console.log("inside the functionof the getTitle");
    return this.title.toUpperCase();
  },
};

console.log(movie.title);
movie.getDetails();
// let details = "year";
movie.getMovieDetails("year");
console.log(movie.cast.other);

function movies(title, year) {
  const movieObj = {
    title: title,
    year: year,
    getDetialss() {
      console.log(`Title: ${this.title} Year: ${this.year}`);
    },
  };
  return movieObj;
}
const movie1 = movies("The Avengers", 2012);
console.log(movie1);
movie1.getDetialss();
// const movie2 = movies("Titanic", 2018);
// console.log(movie2);
// movie2.getDetialss();

//**************Constructor function**************//

function Moviee(name, year) {
  this.name = name;
  this.year = year;

  this.getDetails = function () {
    console.log(`Title: ${this.name} Year: ${this.year}`);
  };
}

//*************New keyword*************//
const movie2 = new Moviee("Avatar", 2013);
console.log(movie2);
movie2.getDetails();
