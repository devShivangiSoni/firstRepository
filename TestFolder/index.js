// ================= MOVIE LIST =================
const moviesList = [
  { movieName: "Flash", price: 7 },
  { movieName: "Spiderman", price: 5 },
  { movieName: "Batman", price: 4 },
];

// ================= SELECT ELEMENT =================
const selectMovie = document.getElementById("selectMovie");
const movieNameEl = document.getElementById("movieName");
const moviePriceEl = document.getElementById("moviePrice");
const totalPriceEl = document.getElementById("totalPrice");
const currentDateEl = document.getElementsByClassName("date")
const selectedSeatsHolder = document.getElementById("selectedSeatsHolder");
const numberOfSeatEl = document.getElementById("numberOfSeat");
const proceedBtn = document.getElementById("proceedBtn");
const cancelBtn = document.getElementById("cancelBtn");

let currentMoviePrice = 7; // Default Flash price
let selectedSeatsArray = []; // Store selected seats

// ================= 1?? POPULATE DROPDOWN =================
moviesList.forEach((movie, index) => {
  const option = document.createElement("option");
  option.textContent = movie.movieName;
  option.value = index;
  selectMovie.appendChild(option);
});

// ================= 2?? MOVIE CHANGE EVENT =================
selectMovie.addEventListener("change", function () {
  const selectedMovie = moviesList[this.value];

  movieNameEl.textContent = selectedMovie.movieName;
  moviePriceEl.textContent = "$ " + selectedMovie.price;

  currentMoviePrice = selectedMovie.price;

  updateTotalPrice();
});

// ================= 3?? SEAT SELECTION =================
const seats = document.querySelectorAll("#seatCont .seat");

seats.forEach((seat) => {
  if (!seat.classList.contains("occupied")) {
    seat.addEventListener("click", () => {
      if (seat.classList.contains("selected")) {
        seat.classList.remove("selected");
        selectedSeatsArray = selectedSeatsArray.filter(
          (s) => s !== seat
        );
      } else {
        seat.classList.add("selected");
        selectedSeatsArray.push(seat);
      }

      updateSelectedSeatsUI();
      updateTotalPrice();
    });
  }
});

// ================ SHOW THE CURRENT DATE ===============



// ================= UPDATE TOTAL PRICE =================
function updateTotalPrice() {
  const total = selectedSeatsArray.length * currentMoviePrice;
  totalPriceEl.textContent = "$ " + total;
  numberOfSeatEl.textContent = selectedSeatsArray.length;
}

// ================= UPDATE SELECTED SEATS UI =================
function updateSelectedSeatsUI() {
  selectedSeatsHolder.innerHTML = "";

  if (selectedSeatsArray.length === 0) {
    selectedSeatsHolder.innerHTML =
      '<span class="noSelected">No Seat Selected</span>';
  } else {
    selectedSeatsArray.forEach((seat, index) => {
      const span = document.createElement("span");
      span.textContent = "Seat " + (index + 1);
      selectedSeatsHolder.appendChild(span);
    });
  }
}

// ================= 4?? CONTINUE BUTTON =================
proceedBtn.addEventListener("click", () => {
  if (selectedSeatsArray.length === 0) {
    alert("Oops no seat Selected");
    return;
  }

  alert("Yayy! Your Seats have been booked");

  selectedSeatsArray.forEach((seat) => {
    seat.classList.remove("selected");
    seat.classList.add("occupied");
  });

  selectedSeatsArray = [];

  updateSelectedSeatsUI();
  updateTotalPrice();
});

// ================= 5?? CANCEL BUTTON =================
cancelBtn.addEventListener("click", () => {
  selectedSeatsArray.forEach((seat) => {
    seat.classList.remove("selected");
  });

  selectedSeatsArray = [];

  updateSelectedSeatsUI();
  updateTotalPrice();
});
