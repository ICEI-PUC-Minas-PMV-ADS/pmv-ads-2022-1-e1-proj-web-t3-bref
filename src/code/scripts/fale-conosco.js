/* Zoom area script */

var maxClicksAddMoreSize = 6;
var maxClicksSubtractMoreSize = -2;

var countClicksToHiddenItems = 3;
var defaultSizeWindow = 0;

var countClicksChangeSizeItems = 0;
var namesItemToHidden = ['breffBig'];

function startWindow() {
    console.log("Chamou a função startWindow ");

    setDefaultSizeWindow();

    let currentDefaultWindowSize = getCurrentWindowSizeValue();
    document.body.style.fontSize = currentDefaultWindowSize + 'px';
    console.log("Na função startWindow o valor de defaultSizeWindow é:", defaultSizeWindow);
}

function setDefaultSizeWindow() {
    console.log("Chamou a função setDefaultSizeWindow")
    if (defaultSizeWindow == 0) {
        let myWindowSize = window.getComputedStyle(document.body).fontSize;
        defaultSizeWindow = parseInt(myWindowSize.replace('px', ''));
        console.log("Na função startWindow o valor atribuido a defaultSizeWindow foi:", defaultSizeWindow);
    }
}

function getCurrentWindowSizeValue() {
    console.log("Chamou a função getCurrentWindowSizeValue");

    let fontSizeFromLocalStorage = localStorage.getItem("userFontSize");

    console.log("valor de fonte retornado do localStorage foi:", fontSizeFromLocalStorage);

    if (fontSizeFromLocalStorage !== null) {
        return Number.parseInt(fontSizeFromLocalStorage);
    }
    else {
        let myWindowSize = window.getComputedStyle(document.body).fontSize;
        let currentDefaultWindowSize = parseInt(myWindowSize.replace('px', ''));
        return currentDefaultWindowSize;
    }
}

function changeSizeAllItems(isAddMoreSize) {
    let currentWindowSize = getCurrentWindowSizeValue();

    if (isAddMoreSize && isValidAddMoreSize()) {
        countClicksChangeSizeItems++;
        const newFontSize = (currentWindowSize + 3);
        document.body.style.fontSize = newFontSize + 'px';
        setUserFontSize(newFontSize);
    }

    if (!isAddMoreSize && isValidSubtractMoreSize()) {
        countClicksChangeSizeItems--;
        const newFontSize = (currentWindowSize - 3);
        document.body.style.fontSize = newFontSize + 'px';
        setUserFontSize(newFontSize);
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
    setUserFontSize(defaultSizeWindow);
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

        if (myBigBreff !== null)
            myBigBreff.style.visibility = action;
    }
}

function setUserFontSize(fontSize) {
    localStorage.setItem("userFontSize", fontSize);
    console.log("Salvou userFontSize no localStorage com valor:", fontSize);
}

/* validation area */

const inputName = document.querySelector('#inputName');
const inputMsg = document.querySelector('#msgInput');
const inputEmail = document.querySelector('#inputEmail');
const inputPhone = document.querySelector('#inputTelefone');

const minLengthMessage = 20;
const minLengthPhone = 16;
const minLengthName = 5;

const parenthesesOpen = "(";
const parenthesesClose = ")";
const space = " ";
const trace = "-";

var lastValueInputPhone = "null";

function maskPhone() {

    // (XX) X XXXX-XXXX

    if (inputPhone.value.length == 1) {
        inputPhone.value = parenthesesOpen + inputPhone.value;
        return;
    }

    if (inputPhone.value.length == 3) {
        inputPhone.value = inputPhone.value + parenthesesClose + space;
        return;
    }

    if (inputPhone.value.length == 6) {
        inputPhone.value = inputPhone.value + space;
        return;
    }

    if (inputPhone.value.length == 11) {
        inputPhone.value = inputPhone.value + trace;
        return;
    }
}

function sendMessage() {
    if (!validateName()) {
        alert("Nome inv\u00e1lido, minimo 5 caracteres.");
        inputName.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson");
        return;
    }
    inputName.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: green");

    if (!validateEmail()) {
        alert("Email inv\u00e1lido, deve conter um @ e .com.");
        inputEmail.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson");
        return;
    }
    inputEmail.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: green");

    if (!validatePhone()) {
        alert("Telefone inv\u00e1lido, n\u00e3o condiz com o padr\u00e3o.");
        inputPhone.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson");
        return;
    }
    inputPhone.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: green");

    if (!validateMessage()) {
        alert("Mensagem inv\u00e1lida, minimo 20 caracterers.");
        inputMsg.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson");
        return;
    }

    inputMsg.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: green");

    alert("Mensagem enviada, obrigado por nos ajudar a melhorar cada dia mais!");
    window.location.href = "index.html";
}


function validatePhone() {
    return inputPhone.value.length == minLengthPhone;
}

function validateEmail() {
    let email = inputEmail.value;
    if (email.search('@') != -1 && email.search('.com') != -1) {
        return true;
    }
    return false;
}

function validateName() {
    return inputName.value.length >= minLengthName;
}

function validateMessage() {
    return inputMsg.value.length > minLengthMessage;
}


/* end validation area */