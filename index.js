document.addEventListener("DOMContentLoaded", function () {
    var emailInput = document.querySelector(".email-form input");
    emailInput.addEventListener("click", function () {
        clearErrorStyles(emailInput);
    });

});

function clearErrorStyles(emailInput) {
    var errorLabel = document.querySelector("#error-label");
    errorLabel.style.display = "none";
    emailInput.classList.remove("error");
    emailInput.value = "";
}

function validateForm() {
    var emailInput = document.querySelector(".email-form input");
    var errorLabel = document.querySelector("#error-label");
    var emailValue = emailInput.value.trim();
    

    if (emailValue === "") { // check if the email is empty
        errorLabel.style.display = "block";
        emailInput.classList.add("error");
    } else {
        // Check if the email is correctly formatted using a simple regular expression
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            errorLabel.style.display = "block";
            emailInput.classList.add("error");
        } else {
            errorLabel.classList.remove("display");
            emailInput.classList.remove("error");
        }
    }

    // Only open the email client if the form is valid
    if (emailValue !== "" && emailInput.classList.contains("error") === false) {
        submitForm();
        emailInput.value = "";
    }
}

function submitForm() {
    var emailInput = document.querySelector(".email-form input");
    var emailValue = emailInput.value.trim();
    var signUp = document.querySelector(".signup-container");
    var succes = document.querySelector(".succes-container");
    var confirmationMessage = document.querySelector("strong");
    var emailInput = document.querySelector(".email-form input");
    
    window.open("mailto:" + emailInput.value);
    succes.classList.toggle("show-succes");
    signUp.classList.toggle("hide");
    confirmationMessage.textContent = emailValue ;
}

function dismissMessage() {
    var signUp = document.querySelector(".signup-container");
    var succes = document.querySelector(".succes-container");
    succes.classList.remove("show-succes");
    signUp.classList.remove("hide");
}

