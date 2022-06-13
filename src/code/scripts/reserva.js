/* SABER SE ESTÁ LOGADO OU NÃO */
if(localStorage.getItem("token") == null){
	alert("Para acessar esta página, você precisa entrar em uma conta.")
	window.location.href = "../html/entrar.html"
	document.getElementById("abaCadastrar").click();
}

function validateFields(){
    toggleEmailErrors();
    toggleContato();
    toggleCadeira();
    toggleData();
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

function toggleContato(){
    const contato = document.getElementById('contato').value;
    if (!contato){
        document.getElementById('contato-required-error').style.display = "block";
    } else {
        document.getElementById('contato-required-error').style.display = "none";
    }
    if (validateContato(contato)  || (!contato)){
        document.getElementById('contato-invalid-error').style.display = "none";
    } else{
        document.getElementById('contato-invalid-error').style.display = "block";
    }
    
}
function toggleCadeira(){
    const cadeira = document.getElementById('cadeira').value;
    if (!cadeira){
        document.getElementById('cadeira-required-error').style.display = "block";
    } else {    
        document.getElementById('cadeira-required-error').style.display = "none";
    }
    if (validateCadeira(cadeira)  || (!cadeira)){
        document.getElementById('cadeira-invalid-error').style.display = "none";
    } else{
        document.getElementById('cadeira-invalid-error').style.display = "block";
    }
    
}
function toggleData(){
    const data = document.getElementById('data').value;
    if (!data){
        document.getElementById('data-required-error').style.display = "block";
    } else {
        document.getElementById('data-required-error').style.display = "none";
    }
    if (validateCadeira(data)  || (!data)){
        document.getElementById('data-invalid-error').style.display = "none";
    } else{
        document.getElementById('data-invalid-error').style.display = "block";
    }
    
}


function toggleButtonsDisable(){
    const email = document.getElementById('email').value;
    if (validateEmail(email)){
        alert('Reserva em andamento...');
    } else {
        alert('Preencha os dados corretamente')
    }
    /* const emailValid = validateEmail();
    document.getElementById('recover-button').disabled =!emailValid; */
}

function validateEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}

function validatedata(data){
    return (data)>0;
}
function validateCadeira(cadeira){
    return (cadeira)>0;
}
function validateContato(contato){
    return /\d\d\d\1{7,8}/.test(contato);
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