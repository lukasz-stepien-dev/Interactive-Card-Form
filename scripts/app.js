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

function cardholderNameCheck() {
    let name = this.value;

    if (name === "") {
        wrongName.textContent = "Can't be blank" ;
    } else {
        wrongName.textContent = "";
    }

    for (let i = 0; i < name.length; i++) {
        if (name[i].charCodeAt(0) >= 33 && name[i].charCodeAt(0) <= 64) {
            wrongName.textContent = "Wrong format, letters only.";
        } else {
            wrongName.textContent = "";
        }
    }
}

function cardNumberCheck() {
    let number = this.value;

    if (number === "") {
        wrongCardNumber.textContent = "Can't be blank";
    } else {
        wrongCardNumber.textContent = "";
    }


    for (let i = 0; i < number.length; i++) {
        if (number[i].charCodeAt(0) > 57 || number[i].charCodeAt(0) < 48) {
            wrongCardNumber.textContent = "Wrong format, numbers only.";
            break;
        } else {
            wrongCardNumber.textContent = "";
            }
        
    }
    

    if (number.length < 16 && wrongCardNumber.textContent != "Can't be blank" && wrongCardNumber.textContent != "Wrong format, numbers only.") {
        wrongCardNumber.textContent = "Too little, type 16 numbers.";
    }
}

function expiryCheck() {
    let expiry = this.value;

    if (expiry === "") {
        wrongExpiryDate.textContent = "Can't be blank";
    } else {
        wrongExpiryDate.textContent = "";
    }


    for (let i = 0; i < expiry.length; i++) {
        if (expiry[i].charCodeAt(0) > 57 || expiry[i].charCodeAt(0) < 48) {
            wrongExpiryDate.textContent = "Wrong format, numbers only.";
            break;
        } else {
            wrongExpiryDate.textContent = "";
            }
        
    }
    

    if (expiry.length < 2 && wrongExpiryDate.textContent != "Can't be blank" && wrongExpiryDate.textContent != "Wrong format, numbers only.") {
        wrongExpiryDate.textContent = "One more number.";
    }
}

function monthCheck() {
    let expiryMonth = this.value;
    Number(expiryMonth);
    if (expiryMonth > 12) {
        wrongExpiryDate.textContent = "We have 12 months.";
    }
}

cardholderName.addEventListener('blur', cardholderNameCheck, false);
cardNumber.addEventListener('blur', cardNumberCheck, false);
month.addEventListener('blur', expiryCheck, false);
month.addEventListener('blur', monthCheck, false)

year.addEventListener('blur', expiryCheck, false);