/* SABER SE ESTÁ LOGADO OU NÃO */
if(localStorage.getItem("token") == null){
	alert("Para acessar esta página, você precisa entrar em uma conta.")
	window.location.href = "../html/entrar.html"
	document.getElementById("abaCadastrar").click();
}

function validEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+1, field.value.length);

    if ((usuario.length >=1) && 
    (dominio.length >=3) && 
    (usuario.search("@")==-1) && 
    (dominio.search("@")==-1) && 
    (usuario.search(" ")==-1) && 
    (dominio.search(" ")==-1) && 
    (dominio.search(".")!=-1) && 
    (dominio.indexOf(".") >=1) && 
    (dominio.lastIndexOf(".") < dominio.length - 1)) {
        document.getElementById("email").innerHTML="<font color='green'>E-mail válido</font>";
    }
    else{
        document.getElementById("email").innerHTML="<font color='red'>Revise o email inserido.</font>";
    }
}

function functionOne(){

    if (validEmail && validarTel && validarCad && validarData){
        alert("Reservando...")
        window.location.href = "../html/reservaConcluida.html"
    } else{
        alert("Revise os dados...")
    }
}

function validarTel (){
    var telefone = formReserva.telefone.value;
    
    if(!telefone == "") {
        document.getElementById("telefone").innerHTML="<font color='green'>Contato inserido</font>";
    }
    else{
        document.getElementById("telefone").innerHTML="<font color='red'>Revise o contato inserido.</font>";
    }
}

function validarCad (){
    var cadeira = formReserva.cadeira.value;

    if(cadeira >=1){
        document.getElementById("cadeira").innerHTML="<font color='green'>Esta quantidade será reservada.</font>";
    }
    else{
        document.getElementById("cadeira").innerHTML="<font color='red'>Quantas cadeiras deseja reservar?</font>";
    }

}

function validarData (){
    var data = formReserva.data.value;

    if(!data == "") {
        document.getElementById("data").innerHTML="<font color='green'>Certinho mané</font>";
    }
    else{
        document.getElementById("data").innerHTML="<font color='red'>Qual a data da reserva?</font>";
    }
}



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