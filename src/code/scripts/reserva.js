function validateFields(){
    toggleEmailErrors();
    toggleButtonsDisable();
}


function toggleEmailErrors(){
    const email = document.getElementById('email').value;
    if (!email){
        document.getElementById('email-required-error').style.display = "block";
    } else {
        document.getElementById('email-required-error').style.display = "none";
    }
    if (validateEmail(email) || (!email)){
        document.getElementById('email-invalid-error').style.display = "none";
    } else{
        document.getElementById('email-invalid-error').style.display = "block";
    }
} 


function validateEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}