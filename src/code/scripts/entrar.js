function Entrar() {
	/* Mostrar senhas */
	const btn = document.querySelector(".fa-eye");
	const btnSenhaCadastro = document.querySelector("#verSenha")
	const btnConfirm = document.querySelector("#verConfirmarSenha")
	/* Inputs */
	const inputSenha = document.querySelector("#senha")
	const inputEmailCadastro = document.querySelector("#emailCadastro")
	const inputSenhaCadastro = document.querySelector("#senhaCadastro")
	const inputConfirmarSenha = document.querySelector("#confirmarSenha")
	/* outro */
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

			const tabcontent = document.querySelector('#' + id);
			
			tabcontent.style.display = "block"
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
					inputSenhaCadastro.setAttribute("style", "box-shadow: 0px 0px 4px crimson")
					inputConfirmarSenha.setAttribute("style", "box-shadow: 0px 0px 4px crimson")
				} else {
					inputSenhaCadastro.setAttribute("style", "box-shadow: 0px 0px 4px green")
					inputConfirmarSenha.setAttribute("style", "box-shadow: 0px 0px 4px green")
				}
			})
		}

		function compararConfirmarComSenha() {
			inputConfirmarSenha.addEventListener("keyup", ()=> {
				if(inputSenhaCadastro.value != inputConfirmarSenha.value) {
					inputConfirmarSenha.setAttribute("style", "box-shadow: 0px 0px 4px crimson")
					inputSenhaCadastro.setAttribute("style", "box-shadow: 0px 0px 4px crimson")
				} else {
					inputConfirmarSenha.setAttribute("style", "box-shadow: 0px 0px 4px green")
					inputSenhaCadastro.setAttribute("style", "box-shadow: 0px 0px 4px green")
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
	
	}

	function iniciar() {

		const navegacaoAbas = NavegacaoAbas()
		navegacaoAbas.iniciar();

		const mostrarSenhas = MostrarSenhas()
		mostrarSenhas.iniciar();

		const compararSenhas = CompararSenhas()
		compararSenhas.iniciar();

		const validacaoInputs = ValidacaoInputs()
		validacaoInputs.iniciar();
		
		cadastrar();
	}

	return {
		iniciar
	}
}	

window.addEventListener('load', () => {
	const entrar = Entrar()
	entrar.iniciar()
})