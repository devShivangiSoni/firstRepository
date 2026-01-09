const movie = {
  title: "The Avengers",
  year: 2012,
  genre: "Action,Sci-Fi,Thiller",
  cast: { mainLead: "Robert Dowmey Jr.", other: "Chris Evans" },
  getDetails: function () {
    console.log(
      `Title: ${movie.title}\nYear: ${movie.year}\nGenre: ${movie.genre}\nCast: ${movie.cast}`
    );
  },
  getMovieDetails: function (detail) {
    console.log(movie[detail]);
  },
};

console.log(movie.title);
movie.getDetails();
// let details = "year";
movie.getMovieDetails("year");
console.log(movie.cast.other);
