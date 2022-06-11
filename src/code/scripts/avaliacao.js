
/* input validate area */

const inputNomeRestaurante = document.querySelector('#inputNomeRestaurante');
const inputCodigoAtendimento = document.querySelector('#inputCodigoAtendimento');
const inputOpiniaoComida = document.querySelector('#inputOpiniaoComida');
const inputOpiniaoAtendimento = document.querySelector('#inputOpiniaoAtendimento');
const inputExperiencia = document.querySelector('#inputExperiencia');

function sendAvaliacao() {

    if (!validateNomeRestaurante()) {
        alert("Nome de restaurante inv\u00e1lido, minimo 5 caracteres.");
        inputNomeRestaurante.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson");
        return;
    }

    inputNomeRestaurante.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: green");

    if (!validateCodigoAtendimento()) {
        alert("Codigo atendimento inv\u00e1lido, deve conter 8 caracteres.");
        inputCodigoAtendimento.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson");
        return;
    }

    inputCodigoAtendimento.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: green");

    if (!validateOpiniaoComida()) {
        alert("Opini\u00e3o inv\u00e1lida, minimo 5 caracteres.");
        inputOpiniaoComida.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson");
        return;
    }

    inputOpiniaoComida.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: green");

    if (!validateOpiniaoAtendimento()) {
        alert("Opini\u00e1o sobre o atendimento inv\u00e1lida, minimo 5 caracteres.");
        inputOpiniaoAtendimento.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson");
        return;
    }

    inputOpiniaoAtendimento.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: green");

    if (!validateExperiencia()) {
        alert("Experi\u00eancia inv\u00c1lida, minimo 5 caracteres.");
        inputExperiencia.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson");
        return;
    }

    inputExperiencia.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: green");

    alert("Avalia\u00e7\u00e1o enviada, obrigado por nos ajudar a melhorar cada dia mais!");
    window.location.href = "../html/index.html";
}

function validateNomeRestaurante() {
    let input = inputNomeRestaurante.value;
    return input.length >= 5;
}

function validateCodigoAtendimento() {
    let input = inputCodigoAtendimento.value;
    return input.length == 8;
}

function validateOpiniaoComida() {
    let input = inputOpiniaoComida.value;
    return input.length >= 5;
}

function validateOpiniaoAtendimento() {
    let input = inputOpiniaoAtendimento.value;
    return input.length >= 5;
}

function validateExperiencia() {
    let input = inputExperiencia.value;
    return input.length >= 5;
}

/* zoom area */

var maxClicksAddMoreSize = 6;
var maxClicksSubtractMoreSize = -2;

var countClicksToHiddenItems = 3;
var defaultSizeWindow = 0;

var countClicksChangeSizeItems = 0;
var namesItemToHidden = ['breffBig'];

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

// Getting the name input by url and parsin it with default name form
window.onload = function() {
    // getting the id from URL
    var url = document.location.toString();
    var name = url.substring(url.lastIndexOf('name=%27') + 8, url.lastIndexOf('%27')).replace('%20',' ');

    document.getElementById("inputNomeRestaurante").value=name;
}
