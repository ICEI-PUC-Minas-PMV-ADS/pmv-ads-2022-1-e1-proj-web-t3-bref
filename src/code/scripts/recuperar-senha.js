 /* ATUALIZAÇÃO DE CONTEUDO */
 function sumir(){
    document.getElementById(redefinicaoSenha).hidden=true;
    document.getElementById(olhos).hidden=true;

}
function inicia(){
    for(var i=recuperarSenha; i=redefinicaoSenha; i++){
        document.getElementById(redefinicaoSenha).hidden=true;
        document.getElementById(olhos).hidden=true;
    }

    document.getElementById(recuperarSenha).addEventListener("load", rolar);
    document.getElementById(redefinicaoSenha).addEventListener("load", rolar);
    document.getElementById(olhos).addEventListener("load", rolar);   
    
}


/* function MostrarSenhas() { */
    
    /* Mostrar senhas */
    const BtnVerSenha = document.querySelector("#verConfirmarSenha")
    const BtnVerConfirmarSenha = document.querySelector("#verSenha")
    const InputNovaSenha = document.querySelector("#NovaSenha")
    const InputconfirmarNovaSenha = document.querySelector("#confirmarNovaSenha")

    BtnVerConfirmarSenha.addEventListener("mouseover", ()=>{
        
        if(InputNovaSenha.getAttribute("type") == "password"){
            InputNovaSenha.setAttribute("type" , "type")
            } else {
                InputNovaSenha.setAttribute("type", "password")
        }
    })     
        
    BtnVerSenha.addEventListener("mouseover", ()=>{

        if(InputconfirmarNovaSenha.getAttribute("type") == "password"){
            InputconfirmarNovaSenha.setAttribute("type" , "type")
            } else {
                InputconfirmarNovaSenha.setAttribute("type", "password")
        }
    })
    
/*function CompararSenhas() {

		function compararSenhaComConfirmar(){
			InputNovaSenha.addEventListener("keyup", ()=> {

				if(InputconfirmarNovaSenha.value != InputNovaSenha.value) {
					InputNovaSenha.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson")
					InputconfirmarNovaSenha.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson")
				} else {
					InputNovaSenha.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green")
					InputconfirmarNovaSenha.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green")
					InputconfirmarNovaSenha.setAttribute("style", "text-shadow: 0px 0px 3px green; color: green")
					InputconfirmarNovaSenha.textContent = "Confirmar a senha"
				}
			})
		}

		function compararConfirmarComSenha() {
			InputconfirmarNovaSenha.addEventListener("keyup", ()=> {

				if(InputNovaSenha.value != InputconfirmarNovaSenha.value) {
					InputconfirmarNovaSenha.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson")
					InputNovaSenha.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson")
					InputconfirmarNovaSenha.setAttribute("style", "text-shadow: 0px 0px 3px crimson; color: crimson")
					InputconfirmarNovaSenha.textContent = "Confirmar a senha* As senhas devem ser iguais."
				} else {
					InputconfirmarNovaSenha.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green")
					InputNovaSenha.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green")
					InputconfirmarNovaSenha.setAttribute("style", "text-shadow: 0px 0px 3px green; color: green")
					InputconfirmarNovaSenha.textContent = "Confirmar a senha"
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
	} */

/* PLACEHOLDER VERMELHO E COM BORDA QUANDO EMAIL ESTÁ ERRADO */

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


/* MENSAGEM DE EMAIL ENVIADO */

function enviarEmail(){

    document.getElementById('recuperarSenha').style.display = "none";
    document.getElementById('redefinicaoSenha').style.display = "block";
    document.getElementById('mensagem-email').style.display = "none";
    document.getElementById('olhos').style.display = "block";

    alert("Preencha com seu e-mail cadastrado!")
    confirm("E-mail enviado!")
}
    document.getElementById('btnEmailEnviado').addEventListener('mouseup', enviarEmail);

    window.addEventListener("load", inicia);




    let NovaSenha = document.getElementById('NovaSenha');
    let confirmarNovaSenha = document.getElementById('confirmarNovaSenha');
    
    function validarSenha() {
      if (NovaSenha.value != confirmarNovaSenha.value) {
        confirmarNovaSenha.setCustomValidity("Senhas diferentes!");
        confirmarNovaSenha.reportValidity();
        return false;
      } else {
        confirmarNovaSenha.setCustomValidity("")
        confirm("Senha redefinida com sucesso!");
        return true;
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