function validateFields(){
    toggleEmailErrors();
    toggleButtonsDisable();
}

function isEmailValid(){
const email = document.getElementById("email").value;
if (!email) {
    return false;
}
return validateEmail(email);
}

function toggleEmailErrors(){
    const email = document.getElementById('email').value;
    if (!email){
        document.getElementById('email-required-error').style.display = "block";
    } else {
        document.getElementById('email-required-error').style.display = "none";
    }
    if (validateEmail(email)){
        document.getElementById('email-invalid-error').style.display = "none";
    } else{
        document.getElementById('email-invalid-error').style.display = "block";
    }
    
} 

function toggleButtonsDisable(){
    const emailValid = isEmailValid();
    document.getElementById('recover-button').disabled =!emailValid;
}

function validateEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}
