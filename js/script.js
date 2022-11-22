const userAge = document.getElementById("age");
const distance = document.getElementById("distance");

const kmPrice = 0.2762;

const button = document.getElementById("button");
let fullPrice;

button.addEventListener("click", function () {
  fullPrice = distance.value * kmPrice;

  if (parseInt(userAge.value) < 18) {
    fullPrice = (fullPrice / 100) * 17.5;
  } else if (parseInt(userAge.value) >= 65) {
    fullPrice = (fullPrice / 100) * 33.3;
  } else {
    fullPrice;
  }

  document.getElementById("output").innerHTML = fullPrice.toFixed(2) + "&euro;";
});
