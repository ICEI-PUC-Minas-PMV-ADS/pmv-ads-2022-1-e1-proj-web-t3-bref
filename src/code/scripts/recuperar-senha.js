 /* MENSAGEM DE EMAIL ENVIADO */

function enviarEmail(){

    document.getElementById('recuperarSenha').style.display = "none";
    document.getElementById('redefinicaoSenha').style.display = "block";
    document.getElementById('mensagem-email').style.display = "none";

    alert("E-mail enviado!")
}

    document.getElementById('btnEmailEnviado').addEventListener('mouseup', enviarEmail);



    /* TESTE 
    document.getElementById('mensagem-email').innerHTML= "E-mail enviado!" 
    document.getElementById('mensagem-email').style.color = "forestgreen"; */

    

 /* TESTE 1 ATUALIZAÇÃO DE CONTEUDO */
 function sumir(redefinicaoSenha){
    document.getElementById(redefinicaoSenha).hidden=true;
}
function inicia(){
    for(var i=recuperarSenha; i=redefinicaoSenha; i++){
        document.getElementById(redefinicaoSenha).hidden=true;
    }

    document.getElementById(recuperarSenha).addEventListener("load", rolar);
    document.getElementById(redefinicaoSenha).addEventListener("load", rolar);
   
    
}
window.addEventListener("load", inicia);

/* MOSTRAR SENHAS */
const btn = document.querySelector(".fa-eye");
const btnSenhaCadastro = document.querySelector("#verSenha")
const btnConfirm = document.querySelector("#verConfirmarSenha")

/* INPUTS */
const inputSenha = document.querySelector("#senha")
const inputConfirmarSenha = document.querySelector("#confirmarSenha")

/* VALIDAÇÕES */
var validSenha = false
var validConfirmarSenha = false

function iniciar(){
    mostrarSenhaEntrar()
    mostrarSenhaCadastro()
    mostrarConfirmarSenhaCadastro()

    return {
        iniciar
}
}

function CompararSenhas() {

function compararSenhaComConfirmar(){
    inputSenhaCadastro.addEventListener("keyup", ()=> {
        if(inputConfirmarSenha.value != inputSenhaCadastro.value) {
            inputSenhaCadastro.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson")
            inputConfirmarSenha.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson")
        } else {
            inputSenhaCadastro.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green")
            inputConfirmarSenha.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green")
        }
    })
}

function compararConfirmarComSenha() {
    inputConfirmarSenha.addEventListener("keyup", ()=> {
        if(inputSenhaCadastro.value != inputConfirmarSenha.value) {
            inputConfirmarSenha.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson")
            inputSenhaCadastro.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson")
        } else {
            inputConfirmarSenha.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green")
            inputSenhaCadastro.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green")
        }
    })
}
function iniciar(){
    compararSenhaComConfirmar()
    compararConfirmarComSenha()
}

return {
    iniciar
}
}


/* PLACEHOLDER VERMELHO E COM BORDA QUANDO ERRADO */

function validarEmail(){
    var email = document.querySelector('#email');
    var error = document.querySelector('#error-email');
 
    if(!email.checkValidity()){
    error.innerHTML = ""
    }
 }

 function redefinirMsg(){
    var error = document.querySelector('#error-email')
    if(error.innerHTML == ""){error.innerHTML == ""
    }
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