/**************************
 *Comment:
 *Author: Yuki Kobatake
 *Date created: 29/10/2024
 **************************/
function clearRegistrationForm() {
    document.querySelector(".registrationForm").reset();
}

function getCurrentYear() {
    return new Date().getFullYear();
}

function validateRegistrationForm() {
    //let phoneNumber = document.forms["registrationForm"]["phoneNumber"].value;
    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirmPassword").value;
    let isNoErrors = true;

    if (password != confirmPassword) {
        alert("Password and Confirm Password does not match. Please try again.");
        isNoErrors = false;
    }

    //if(phoneNumber != '' && isNaN(phoneNumber))
    //{
    // alert("invalid telephone number. Please try again.");
    //isNoErrors = false;
    //}

    if (!isNoErrors)
        return isNoErrors;
}