const cardholderName = document.getElementById("cardholder-name-on-the-image");
const cardNumber = document.getElementById("card-number-on-the-image");
const month = document.getElementById("month-on-the-image");
const year = document.getElementById("year-on-the-image");
const cvc = document.getElementById("cvc-on-the-blank-card");

cardholderName.textContent = localStorage.getItem("cardholderName");
cardNumber.textContent = localStorage.getItem("cardNumber");
month.textContent = localStorage.getItem("expiryMonth");
year.textContent = localStorage.getItem("expiryYear");
cvc.textContent = localStorage.getItem("cvc");