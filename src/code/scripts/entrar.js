function Pg() {
	/* Mostrar senhas */
	const Btn = document.querySelector(".fa-eye")
	const BtnConfirm = document.querySelector("#verConfirmarSenha")
	const BtnSenhaCadastro = document.querySelector("#verSenha")
	/* Inputs */
	const InputSenha = document.querySelector("#senha")
	const InputEmailCadastro = document.querySelector("#emailCadastro")
	const InputSenhaCadastro = document.querySelector("#senhaCadastro")
	const InputConfirmarSenha = document.querySelector("#confirmarSenha")
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
			
				Btn.addEventListener("click", ()=>{
					
					if(InputSenha.getAttribute("type") == "password"){
							InputSenha.setAttribute("type" , "type")
						} else {
							InputSenha.setAttribute("type", "password")
						}
				}) 
		}

		function mostrarSenhaCadastro() {
			
			BtnSenhaCadastro.addEventListener("click", ()=>{

				if(InputSenhaCadastro.getAttribute("type") == "password"){
						InputSenhaCadastro.setAttribute("type" , "type")
				} else {
						InputSenhaCadastro.setAttribute("type", "password")
				}
			})
		}

		function mostrarConfirmarSenhaCadastro() {

				BtnConfirm.addEventListener("click", ()=>{

					if(InputConfirmarSenha.getAttribute("type") == "password"){
							InputConfirmarSenha.setAttribute("type" , "type")
					} else {
							InputConfirmarSenha.setAttribute("type", "password")
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
			InputSenhaCadastro.addEventListener("keyup", ()=> {
				if(InputConfirmarSenha.value != InputSenhaCadastro.value) {
					InputSenhaCadastro.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson")
					InputConfirmarSenha.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson")
				} else {
					InputSenhaCadastro.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green")
					InputConfirmarSenha.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green")
				}
			})
		}

		function compararConfirmarComSenha() {
			InputConfirmarSenha.addEventListener("keyup", ()=> {
				if(InputSenhaCadastro.value != InputConfirmarSenha.value) {
					InputConfirmarSenha.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson")
					InputSenhaCadastro.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson")
				} else {
					InputConfirmarSenha.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green")
					InputSenhaCadastro.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green")
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
			if(!InputEmailCadastro.checkValidity()){
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