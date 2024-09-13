function validation() {
    validUsername();
    validEmail();
    validPassword();
    validConfirmPassword();
    validPhoneNumber();
    validAddress();
    validBirthdate();
    validGender();
}
//username
function validUsername() {
    var username = document.getElementById("username").value;
    var errUsername = document.getElementById("errUsername"); 
    var regEx = /^[a-zA-Z0-9_]+$/;
    if (username.trim() === "") {
        errUsername.innerHTML = "Please enter a username";
    } else if (!regEx.test(username)) {
        errUsername.innerHTML = "Username can only contain letters, numbers, and underscores";
    } else {
        errUsername.innerHTML = "";
    }
}
//email
function validEmail() {
    var email = document.getElementById("email").value;
    var errEmail = document.getElementById("errEmail");
    var regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|net)$/;
    if (email.trim() === "") {
        errEmail.innerHTML = "Please enter your email";
    } else if (!regEx.test(email)) {
        errEmail.innerHTML = "Please enter a valid email address";
    } else {
        errEmail.innerHTML = "";
    }
}
//password
function validPassword(){
    var password = document.getElementById("password").value;
    var errPassword = document.getElementById("errPassword");
    var regEx = /^[a-zA-Z0-9]+$/;
    if(password==""){
        errPassword.innerHTML="Please enter the password";
    }
    else if(!regEx.test(password)){ 
        errPassword.innerHTML="Please enter a valid password";
    }
    else{
        errPassword.innerHTML="";
    }
}
//confirm password
function validConfirmPassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("ConfirmPassword").value;
    var errConfirmPassword = document.getElementById("errConfirmPassword");
    if (confirmPassword.trim() === "") {
        errConfirmPassword.innerHTML = "Please confirm your password";
    } else if (confirmPassword !== password) {
        errConfirmPassword.innerHTML = "Passwords do not match";
    } else {
        errConfirmPassword.innerHTML = "";
    }
}
//phonenumber
function validPhoneNumber() {
    var phoneNumber = document.getElementById("PhoneNumber").value;
    var errPhoneNumber = document.getElementById("errPhoneNumber");
    var regEx = /^\d{10}$/;
    if (phoneNumber.trim() === "") {
        errPhoneNumber.innerHTML = "Please enter your phone number";
    } else if (!regEx.test(phoneNumber)) {
        errPhoneNumber.innerHTML = "Phone number must be exactly 10 digits";
    } else {
        errPhoneNumber.innerHTML = "";
    }
}
//address
function validAddress() {
    var address = document.getElementById("address").value;
    var errAddress = document.getElementById("errAddress");
    if (address.trim() === "") {
        errAddress.innerHTML = "Please enter your address";
    } else {
        errAddress.innerHTML = "";
    }
}
//birthdate
function validBirthdate() {
    var birthdate = document.getElementById("Birthdate").value;
    var errDate = document.getElementById("errDate");
    if (birthdate.trim() === "") {
        errDate.innerHTML = "Please enter your birthdate";
    } else {
        errDate.innerHTML = "";
    }
}
//gender
function validGender() {
    var gender = document.getElementById("Gender").value;
    var errGender = document.getElementById("errGender");
    if (gender.trim() === "") {
        errGender.innerHTML = "Please select your gender";
    } else {
        errGender.innerHTML = "";
    }
}
//submission
function submitForm(event) {
    event.preventDefault(); 
    validation();
    const errorMessages = document.querySelectorAll('.error');
    const hasError = Array.from(errorMessages).some(error => error.innerHTML.trim() !== "");
    if (hasError) {
        alert("Please enter valid information");
    } else {
        alert("User Registered");
    }
}

document.getElementById("validationform").addEventListener("submit", submitForm);