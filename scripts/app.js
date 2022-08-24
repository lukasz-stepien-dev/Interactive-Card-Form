document.getElementById("off-js").textContent = "";
document.getElementById("confirm").setAttribute("value", "Confirm");

let cardholderName = document.getElementById("cardholder-name");
let wrongName = document.getElementById("error-name");
let cardNumber = document.getElementById("card-number");
let wrongCardNumber = document.getElementById("error-card-number");
let month = document.getElementById("expiry-date-month");
let year = document.getElementById("expiry-date-year");
let wrongExpiryDate = document.getElementById("error-expiry-date");
let wrongCVC = document.getElementById("erro-cvc");
let isEverythingGood = 0;
let isInputGood = 0;

function cardholderNameCheck() {
    let name = this.value;
    isInputGood = 0;

    if (name === "") {
        wrongName.textContent = "Can't be blank" ;
    } else {
        wrongName.textContent = "";
        isInputGood++;
    }

    for (let i = 0; i < name.length; i++) {
        if (name[i].charCodeAt(0) >= 33 && name[i].charCodeAt(0) <= 64) {
            wrongName.textContent = "Wrong format, letters only.";
        } else {
            wrongName.textContent = "";
            isInputGood++;
        }
    }

    if (isInputGood === 2) {
        isEverythingGood++;
    }
}

function cardNumberCheck() {
    isInputGood = 0;
    let number = this.value;

    if (number === "") {
        wrongCardNumber.textContent = "Can't be blank";
    } else if (number.length < 16){
        wrongCardNumber.textContent = "Too little, type 16 numbers.";
    } else {
        wrongCardNumber.textContent = "";
        isInputGood++;
    }
    for (let i = 0; i < number.length; i++) {
        if (number[i].charCodeAt(0) < 48 && number[i].charCodeAt(0) > 57) {
            wrongCardNumber.textContent = "Wrong format, numbers only.";
        } else {
            wrongCardNumber.textContent = "";
            isInputGood++;
        }
    }

    if (isInputGood === 2) {
        isEverythingGood++;
    }
}

function expiryCheck() {
    isInputGood = 0;
    let expiry = this.value;

    if (expiry === "") {
        wrongExpiryDate.textContent = "Can't be blank";
    } else {
        wrongExpiryDate.textContent = "";
        isInputGood++;
    }

    for (let i = 0; i < expiry.length; i++) {
        if (expiry[i].charCodeAt(0) > 57 && expiry[i].charCodeAt(0) < 48) {
            wrongExpiryDate.textContent = "Wrong format, numbers only.";
        } else {
            wrongExpiryDate.textContent = "";
            isInputGood++;
        }
    }

    if (isInputGood === 2) {
        isEverythingGood++;
    }
}

cardholderName.addEventListener('blur', cardholderNameCheck, false);
cardNumber.addEventListener('blur', cardNumberCheck, false);
month.addEventListener('blur', expiryCheck, false);
year.addEventListener('blur', expiryCheck, false);