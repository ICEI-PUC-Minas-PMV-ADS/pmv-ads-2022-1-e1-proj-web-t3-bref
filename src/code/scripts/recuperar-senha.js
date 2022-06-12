/* ATUALIZAÇÃO DE CONTEUDO */

const formEmail = document.getElementById("formEmail");
const formPassword = document.getElementById("formPassword");
const formPosRedefinicao = document.getElementById("formPosRedefinicao");

function mostrarFormEmail() {
    formEmail.style.display = "block";
    formPassword.style.display = "none";
    formPosRedefinicao.style.display = 'none';
}

function mostrarFormPassword() {
    formPassword.style.display = "block";
    formEmail.style.display = "none";
    formPosRedefinicao.style.display = 'none';
}

function mostrarPosRedefinicao() {
    formPosRedefinicao.style.display = 'block';
    formPassword.style.display = "none";
    formEmail.style.display = "none";
}

/* PLACEHOLDER VERMELHO E COM BORDA QUANDO EMAIL ESTÁ ERRADO */

const inputEmail = document.getElementById('inputEmail');
const firstPassword = document.getElementById('firstPassword');
const secondPassword = document.getElementById('secondPassword');

function sendEmail() {

    if (!validateEmail()) {
        alert("Email inv\u00e1lido, deve conter um @ e .com.");
        inputEmail.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson");
        return;
    }

    inputEmail.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: green");

    alert("E-mail enviado!");
    mostrarFormPassword();
}

function validateEmail() {
    let email = inputEmail.value;
    if (email.search('@') != -1 && email.search('.com') != -1) {
        return true;
    }
    return false;
}

function sendPassword() {

    if (!validatePassword()) {
        firstPassword.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson");
        secondPassword.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson");
        return;
    }

    inputEmail.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: green");

    alert("Senha redefinida!");
    mostrarPosRedefinicao();
}

function validatePassword() {
    if (firstPassword.value != secondPassword.value) {
        alert("As senhas n\u00e3o s\u00e3o iguais.");
        return false;
    } else if (firstPassword.value.length < 6) {
        alert("Senha inv\u00e1lida, deve conter no minimo 6 caracteres.");
        return false;
    } else if (firstPassword.value == secondPassword.value && firstPassword.value.length >= 6) {
        return true;
    }
    return false;
}

/* Zoom area script */

var maxClicksAddMoreSize = 6;
var maxClicksSubtractMoreSize = -2;

var countClicksToHiddenItems = 3;
var defaultSizeWindow = 0;

var countClicksChangeSizeItems = 0;
var namesItemToHidden = ['null'];

function startWindow() {
    console.log("Chamou a função startWindow ");

    setDefaultSizeWindow();

    let currentDefaultWindowSize = getCurrentWindowSizeValue();
    document.body.style.fontSize = currentDefaultWindowSize + 'px';
    console.log("Na função startWindow o valor de defaultSizeWindow é:", defaultSizeWindow);

    mostrarFormEmail();
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
    showHiddenItems(namesItemToHidden, 'block');
}

function actionAboutShowableItems(namesItemToHidden, currentCount, maxClicksToHiddenItems) {
    let show = 'block';
    let notShow = 'none';
    let action = currentCount >= maxClicksToHiddenItems ? notShow : show;
    showHiddenItems(namesItemToHidden, action);
}

function showHiddenItems(namesItemToHidden, action) {
    for (x = 0; namesItemToHidden.length > x; x++) {
        let myBigBreff = document.getElementById(namesItemToHidden[x]);

        if (myBigBreff !== null)
            myBigBreff.style.display = action;
    }
}

function setUserFontSize(fontSize) {
    localStorage.setItem("userFontSize", fontSize);
    console.log("Salvou userFontSize no localStorage com valor:", fontSize);
}