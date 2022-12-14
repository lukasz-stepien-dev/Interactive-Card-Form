const submit = document.getElementById("confirm")
document.getElementById("confirm").setAttribute("value", "Confirm");
document.getElementById("off-js").textContent = "";
submit.setAttribute("value", "Confirm");


const cardholderName = document.getElementById("cardholder-name");
const wrongName = document.getElementById("error-name");
const cardNumber = document.getElementById("card-number");
const wrongCardNumber = document.getElementById("error-card-number");
const month = document.getElementById("expiry-date-month");
const year = document.getElementById("expiry-date-year");
const wrongExpiryDate = document.getElementById("error-expiry-date");
const cvc = document.getElementById("cvc");
const wrongCVC = document.getElementById("error-cvc");
const wrongForm = document.getElementById("error-confirm");
const numberOnTheImage = document.getElementById("card-number-on-the-image");
const nameOnTheImage = document.getElementById("cardholder-name-on-the-image");
const monthOnTheImage = document.getElementById("month-on-the-image");
const yearOnTheImage = document.getElementById("year-on-the-image"); 
const cvcOnTheImage = document.getElementById("cvc-on-the-blank-card");
const today = new Date();

function cardholderNameCheck() {
    let name = this.value;
    name = name.trim();
    localStorage.setItem('cardholderName', name);
    nameOnTheImage.textContent = name; 
    
    if (name === "") {
        wrongName.textContent = "Can't be blank" ;
    } else {
        wrongName.textContent = "";
    }

    for (let i = 0; i < name.length; i++) {
        if (name[i].charCodeAt(0) >= 33 && name[i].charCodeAt(0) <= 64) {
            wrongName.textContent = "Wrong format, letters only.";
            break;
        } else {
            wrongName.textContent = "";
        }
    }


    if (name.indexOf(' ') === -1 && wrongName.textContent != "Can't be blank" && wrongName.textContent != "Wrong format, letters only.") {
        wrongName.textContent = "Type full name."
    }
}

function cardNumberCheck() {
    let number = this.value;
    numberOnTheImage.textContent = number.substring(0, 4) + " " + number.substring(4, 8) + " " + number.substring(8, 12) + " " + number.substring(12, 16);
    localStorage.setItem('cardNumber', number);


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
}

function monthCheck() {
    let expiryMonth = this.value;
    localStorage.setItem('expiryMonth', expiryMonth);
    monthOnTheImage.textContent = expiryMonth; 
    Number(expiryMonth);
    if (expiryMonth > 12) {
        wrongExpiryDate.textContent = "We have 12 months.";
    }
}

function yearCheck() {
    let expiryYear = this.value;
    let yearAfter15Years = today.getFullYear() + 15 - 2000;
    localStorage.setItem('expiryYear', expiryYear);
    yearOnTheImage.textContent = expiryYear;
    
    Number(expiryYear);
    if (expiryYear > yearAfter15Years) {
        wrongExpiryDate.textContent = "Your card has too late expiry date.";
    } else if (expiryYear < (today.getFullYear() - 2000) && wrongExpiryDate.textContent != "Can't be blank") {
        wrongExpiryDate.textContent = "Your card is expired";
    }

    if (expiryYear.length < 2 && wrongExpiryDate.textContent != "Can't be blank" && wrongExpiryDate.textContent != "Wrong format, numbers only.") {
        console.log(wrongExpiryDate.textContent);
        wrongExpiryDate.textContent = "One more number in a year.";
    }
}

function cvcCheck() {
    let cvcInput = this.value;
    localStorage.setItem('cvc', cvcInput);
    cvcOnTheImage.textContent = cvcInput; 

    if (cvcInput === "") {
        wrongCVC.textContent = "Can't be blank";
    } else {
        wrongCVC.textContent = "";
    }

    for (let i = 0; i < cvcInput.length; i++) {
        if (cvcInput[i].charCodeAt(0) > 57 || cvcInput[i].charCodeAt(0) < 48) {
            wrongCVC.textContent = "Wrong format, numbers only.";
            break;
        } else {
            wrongCVC.textContent = "";
            }
    }

    if (cvcInput.length < 3 && wrongCVC.textContent != "Can't be blank" && wrongCVC.textContent != "Wrong format, numbers only.") {
        wrongCVC.textContent = "Too little, type 3 numbers.";
    }
}

function checkErrors(event) {
    if (wrongName.textContent != "" || wrongCardNumber.textContent != "" || wrongExpiryDate.textContent != "" || wrongCVC.textContent != "") {
        wrongForm.textContent = "Fill correct form.";
        event.preventDefault();
    } else {
        wrongForm.textContent = "";
    }
}

cardholderName.addEventListener("blur", cardholderNameCheck, false);
cardNumber.addEventListener("blur", cardNumberCheck, false);
month.addEventListener("blur", expiryCheck, false);
month.addEventListener("blur", monthCheck, false);
year.addEventListener("blur", expiryCheck, false);
year.addEventListener("blur", yearCheck, false);
cvc.addEventListener("blur", cvcCheck, false);
submit.addEventListener("click", checkErrors, false);