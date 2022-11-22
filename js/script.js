const userAge = document.getElementById("age");
const distance = document.getElementById("distance");

const kmPrice = 0.2762;
let fullPrice;

const button = document.getElementById("button");

button.addEventListener("click", function () {
  fullPrice = distance.value * kmPrice;
  let discountSenior = (fullPrice / 100) * 33.3;
  let discountJunior = (fullPrice / 100) * 17.5;

  if (parseInt(userAge.value) < 18) {
    fullPrice = fullPrice - discountJunior;
  } else if (parseInt(userAge.value) >= 65) {
    fullPrice = fullPrice - discountSenior;
  } else {
    fullPrice;
  }

  document.getElementById("output").innerHTML = fullPrice.toFixed(2) + "&euro;";
});
