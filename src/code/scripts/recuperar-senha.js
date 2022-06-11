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
    window.location.href = "./entrar.html"
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






/* AUMENTAR E DIMINUIR FONTE */
 var maxClicksAddMoreSize = 8;
 var maxClicksSubtractMoreSize = -2;

 var countClicksToHiddenItems = 3;
 var defaultSizeWindow = 0;

 var countClicksChangeSizeItems = 0;
 var namesItemToHidden = ['null'];

 function startWindow() {
     let currentDefaultWindowSize = getCurrentWindowSizeValue();
     if (defaultSizeWindow == 0)
         defaultSizeWindow = currentDefaultWindowSize;
     mostrarFormEmail();
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

 function getCurrentWindowSizeValue() {
     let myWindowSize = window.getComputedStyle(document.body).fontSize;
     let currentDefaultWindowSize = parseInt(myWindowSize.replace('px', ''));

     return currentDefaultWindowSize;
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
         myBigBreff.style.display = action;
     }
 }