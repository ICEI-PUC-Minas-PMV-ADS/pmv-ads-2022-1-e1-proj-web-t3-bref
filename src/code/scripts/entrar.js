function Pg() {
	/* Mostrar senhas */
	const btn = document.querySelector(".fa-eye");
	const btnSenhaCadastro = document.querySelector("#verSenha")
	const btnConfirm = document.querySelector("#verConfirmarSenha")
	/* Inputs */
	const inputSenha = document.querySelector("#senha")
	const inputEmailCadastro = document.querySelector("#emailCadastro")
	const inputSenhaCadastro = document.querySelector("#senhaCadastro")
	const inputConfirmarSenha = document.querySelector("#confirmarSenha")
	/* Validações */
	var validNome = false
	var validData = false
	var validEmail = false
	var validSenha = false
	var validConfirmarSenha = false
	/* Outro */
	const errorEmail = document.querySelector("#errorEmail")
	
	function NavegacaoAbas() {
    
    const html = {
			links: [...document.querySelector('.links-abas').children],
			contents: [...document.querySelector('.conteudo-abas').children],
			openTab: document.querySelector('[data-open]')
    }

    function esconderTodoConteudoAbas (){
			html.contents.forEach(section => {
					section.style.display = "none"
			})
    }

    function mostrarAbaAtual(id){

			const conteudoAba	 = document.querySelector('#' + id);
			
			conteudoAba.style.display = "block"
    }

    function selecionarAba(event) {

        esconderTodoConteudoAbas()

        const target = event.currentTarget
        mostrarAbaAtual(target.dataset.id)
    }

    function observarMudancas(){
        html.links.forEach(tab => {
            tab.addEventListener('click', selecionarAba)
        })
    }

    function iniciar(){
        esconderTodoConteudoAbas()
        observarMudancas()

        html.openTab.click()
    }

    return {
        iniciar
    }
	}

	function MostrarSenhas() {

		function mostrarSenhaEntrar() {
			
				btn.addEventListener("click", ()=>{
					
					if(inputSenha.getAttribute("type") == "password"){
							inputSenha.setAttribute("type" , "type")
						} else {
							inputSenha.setAttribute("type", "password")
						}
				}) 
		}

		function mostrarSenhaCadastro() {
			
			btnSenhaCadastro.addEventListener("click", ()=>{

				if(inputSenhaCadastro.getAttribute("type") == "password"){
						inputSenhaCadastro.setAttribute("type" , "type")
				} else {
						inputSenhaCadastro.setAttribute("type", "password")
				}
			})
		}

		function mostrarConfirmarSenhaCadastro() {

				btnConfirm.addEventListener("click", ()=>{

					if(inputConfirmarSenha.getAttribute("type") == "password"){
							inputConfirmarSenha.setAttribute("type" , "type")
					} else {
							inputConfirmarSenha.setAttribute("type", "password")
					}
				})
		}

		function iniciar(){
			mostrarSenhaEntrar()
			mostrarSenhaCadastro()
			mostrarConfirmarSenhaCadastro()
		}

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

	function ValidacaoInputs() {
		
		function validarEmail() {
			if(!inputEmailCadastro.checkValidity()){
				errorEmail.innerHTML = "Email inválido";
			}
		}

		function redefinirMsg() {
			if(errorEmail.innerHTML == "Email inválido"){
				errorEmail.innerHTML = "";
			}
		}

		function iniciar(){
			validarEmail()
			redefinirMsg()
		}

		return {
			iniciar
		}
	}
	
	function cadastrar() {
		if(validNome && validData && validEmail && validSenha && validConfirmarSenha){
	
		} else {
			alert("Escreve nos lugarzinho aí namoral?!")
		}
	}
	document.getElementById("btnCadastrar").addEventListener("click", cadastrar);
	
	function iniciar() {

		const navegacaoAbas = NavegacaoAbas()
		navegacaoAbas.iniciar();

		const mostrarSenhas = MostrarSenhas()
		mostrarSenhas.iniciar();

		const compararSenhas = CompararSenhas()
		compararSenhas.iniciar();

		const validacaoInputs = ValidacaoInputs()
		validacaoInputs.iniciar();
	}
	
	return {
		iniciar
	}
}	

window.addEventListener('load', () => {
	const pg = Pg()
	pg.iniciar()
})