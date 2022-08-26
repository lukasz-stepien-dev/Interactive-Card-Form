let submit = document.getElementById("confirm")
document.getElementById("confirm").setAttribute("value", "Confirm");
document.getElementById("off-js").textContent = "";
submit.setAttribute("value", "Confirm");


let cardholderName = document.getElementById("cardholder-name");
let wrongName = document.getElementById("error-name");
let cardNumber = document.getElementById("card-number");
let wrongCardNumber = document.getElementById("error-card-number");
let month = document.getElementById("expiry-date-month");
let year = document.getElementById("expiry-date-year");
let wrongExpiryDate = document.getElementById("error-expiry-date");
let cvc = document.getElementById("cvc");
let wrongCVC = document.getElementById("error-cvc");
let numberOnTheImage = document.getElementById("card-number-on-the-image");
let nameOnTheImage = document.getElementById("cardholder-name-on-the-image");
let today = new Date();

function cardholderNameCheck() {
    let name = this.value;
    nameOnTheImage = name;

    name = name.trim();


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
    Number(expiryMonth);
    if (expiryMonth > 12) {
        wrongExpiryDate.textContent = "We have 12 months.";
    }
}

function yearCheck() {
    let expiryYear = this.value;
    let yearAfter15Years = today.getFullYear() + 15 - 2000;
    
    Number(expiryYear);
    if (expiryYear > yearAfter15Years) {
        wrongExpiryDate.textContent = "Your card have too late expiry date.";
    }

    if (expiryYear.length < 2 && wrongExpiryDate.textContent != "Can't be blank" && wrongExpiryDate.textContent != "Wrong format, numbers only.") {
        wrongExpiryDate.textContent = "One more number in a year.";
    }
}

function cvcCheck() {
    let cvcInput = this.value;

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

cardholderName.addEventListener("blur", cardholderNameCheck, false);
cardNumber.addEventListener("blur", cardNumberCheck, false);
month.addEventListener("blur", expiryCheck, false);
month.addEventListener("blur", monthCheck, false);
year.addEventListener("blur", expiryCheck, false);
year.addEventListener("blur", yearCheck, false);
cvc.addEventListener("blur", cvcCheck, false);

