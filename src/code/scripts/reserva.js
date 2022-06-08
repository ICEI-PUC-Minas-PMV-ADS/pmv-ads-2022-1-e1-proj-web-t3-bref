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

function toggleButtonsDisable(){
    const emailValid = isEmailValid();
    document.getElementById('recover-button').disabled =!emailValid;
}

function validateEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}


/* Aumentar e diminuir fonte */
var maxClicksAddMoreSize = 6;
var maxClicksSubtractMoreSize = -2;

var countClicksToHiddenItems = 3;
var defaultSizeWindow = 0;

var countClicksChangeSizeItems = 0;
var namesItemToHidden = ['null'];

function startWindow() {
    let currentDefaultWindowSize = getCurrentWindowSizeValue();
    if (defaultSizeWindow == 0)
        defaultSizeWindow = currentDefaultWindowSize;
}

function getCurrentWindowSizeValue() {
    let myWindowSize = window.getComputedStyle(document.body).fontSize;
    let currentDefaultWindowSize = parseInt(myWindowSize.replace('px', ''));

    return currentDefaultWindowSize;
}

function changeSizeAllItems(isAddMoreSize) {
    let currentWindowSize = getCurrentWindowSizeValue();
    if (isAddMoreSize && isValidAddMoreSize()) {
        countClicksChangeSizeItems++;
        document.body.style.fontSize = (currentWindowSize + 3) + 'px';
    }
    if (!isAddMoreSize && isValidSubtractMoreSize()) {
        countClicksChangeSizeItems--;
        document.body.style.fontSize = (currentWindowSize - 3) + 'px';
    }
    actionAboutShowableItems(namesItemToHidden, countClicksChangeSizeItems, countClicksToHiddenItems);
}

function isValidAddMoreSize() {
    return countClicksChangeSizeItems < maxClicksAddMoreSize;
}

function isValidSubtractMoreSize() {
    return countClicksChangeSizeItems > maxClicksSubtractMoreSize;
}

function resetDocumentSizes() {
    document.body.style.fontSize = defaultSizeWindow + 'px';
    countClicksChangeSizeItems = 0;
    showHiddenItems(namesItemToHidden, 'visible');
}

function actionAboutShowableItems(namesItemToHidden, currentCount, maxClicksToHiddenItems) {
    let show = 'visible';
    let notShow = 'hidden';
    let action = currentCount >= maxClicksToHiddenItems ? notShow : show;
    showHiddenItems(namesItemToHidden, action);
}

function showHiddenItems(namesItemToHidden, action) {
    for (x = 0; namesItemToHidden.length > x; x++) {
        let myBigBreff = document.getElementById(namesItemToHidden[x]);
        myBigBreff.style.visibility = action;
    }
}