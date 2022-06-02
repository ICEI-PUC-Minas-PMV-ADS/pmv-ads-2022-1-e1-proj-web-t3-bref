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

 function enviarEmail(){
     document.getElementById('mensagem-email').innerHTML = "E-mail enviado!"
    }
    document.getElementById('btnEmail').addEventListener('mouseup', enviarEmail)
    console.log('btnEmail') 

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