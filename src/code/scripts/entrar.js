function Pg() {
	/* Mostrar senhas */
	const Btn = document.querySelector(".fa-eye")
	const BtnConfirm = document.querySelector("#verConfirmarSenha")
	const BtnSenhaCadastro = document.querySelector("#verSenha")
	/* Inputs */
	const InputNome = document.querySelector("#nome")
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
	/* Labels */
	const LabelNome	= document.querySelector("#labelNome")
	const LabelData	= document.querySelector("#labelData")
	const LabelEmail	= document.querySelector("#labelEmail")
	const LabelSenhaCadastro	= document.querySelector("#labelSenhaCadastro")
	const LabelConfirmarSenha	= document.querySelector("#labelConfirmarSenha")
	
	
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
					LabelConfirmarSenha.setAttribute("style", "text-shadow: 0px 0px 3px green; color: green")
					LabelConfirmarSenha.textContent = "Confirmar a senha"
				}
			})
		}

		function compararConfirmarComSenha() {
			InputConfirmarSenha.addEventListener("keyup", ()=> {

				if(InputSenhaCadastro.value != InputConfirmarSenha.value || !InputConfirmarSenha.acess.inp.value == null) {
					InputConfirmarSenha.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson")
					InputSenhaCadastro.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson")
					LabelConfirmarSenha.setAttribute("style", "text-shadow: 0px 0px 3px crimson; color: crimson")
					LabelConfirmarSenha.textContent = "Confirmar a senha* As senhas devem ser iguais."
				} else {
					InputConfirmarSenha.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green")
					InputSenhaCadastro.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green")
					LabelConfirmarSenha.setAttribute("style", "text-shadow: 0px 0px 3px green; color: green")
					LabelConfirmarSenha.textContent = "Confirmar a senha"
				}
			})

			InputConfirmarSenha.addEventListener("keyup", ()=> {
				
				if(InputConfirmarSenha.acess.inp.value == null) {
					InputConfirmarSenha.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson")
					LabelConfirmarSenha.setAttribute("style", "text-shadow: 0px 0px 3px crimson; color: crimson")
					LabelConfirmarSenha.textContent = "Confirmar a senha* As senhas devem ser iguais."
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
			}
		}

		/* Validação Nome */
		InputNome.addEventListener("keyup", ()=>{

			if(InputNome.value.length <= 5){
				LabelNome.textContent = "Nome * Insira seu nome e sobrenome"
				LabelNome.setAttribute("style" , "text-shadow: 0px 0px 1px crimson; color: crimson")
				InputNome.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson" )
			} else {
				LabelNome.textContent = "Nome"
				LabelNome.setAttribute("style" , "text-shadow: 0px 0px 1px green; color: green")
				InputNome.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green" )
			}

			if(InputNome.value.length > 30){
				LabelNome.textContent = "Nome * Apenas o nome e sobrenome"
				LabelNome.setAttribute("style" , "text-shadow: 0px 0px 1px crimson; color: crimson")
			}
		})

		/* Validação Email */
		InputEmailCadastro.addEventListener("keyup", ()=>{

			if(!InputEmailCadastro.checkValidity()){
				LabelEmail.textContent = "Email * Este email não é válido"
				LabelEmail.setAttribute("style" , "text-shadow: 0px 0px 1px crimson; color: crimson")
				InputEmailCadastro.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson" )
			} else {
				LabelEmail.textContent = "Email"
				LabelEmail.setAttribute("style" , "text-shadow: 0px 0px 1px green; color: green")
				InputEmailCadastro.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green" )
			}

			if(InputNome.value.length > 30){
				LabelNome.textContent = "Nome * Seu nome é muito grande"
				LabelNome.setAttribute("style" , "color: crimson")
			}
		})

		/* Validação Senha */
		InputSenhaCadastro.addEventListener("keyup", ()=>{

			if(InputSenhaCadastro.value.length <= 5){
				LabelSenhaCadastro.textContent = "Senha * Insira no mínimo 6 dígitos"
				LabelSenhaCadastro.setAttribute("style" , "text-shadow: 0px 0px 1px crimson; color: crimson")
				InputSenhaCadastro.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson" )
			} else {
				LabelSenhaCadastro.textContent = "Senha"
				LabelSenhaCadastro.setAttribute("style" , "text-shadow: 0px 0px 1px green; color: green")
				InputSenhaCadastro.setAttribute("style", "box-shadow: 0px 0px 3px green; border-color: green" )
			}
		})

		/* Validação Confirmar Senha */

		InputConfirmarSenha.addEventListener("keyup", ()=>{
				
			if(InputConfirmarSenha.value == null) {
				InputConfirmarSenha.setAttribute("style", "box-shadow: 0px 0px 3px crimson; border-color: crimson")
				LabelConfirmarSenha.setAttribute("style", "text-shadow: 0px 0px 3px crimson; color: crimson")
				LabelConfirmarSenha.textContent = "Confirmar a senha* As senhas devem ser iguais."
			} 
		})

		function iniciar(){
			validarEmail()
		}

		return {
			iniciar
		}
	}
	
	function cadastrar() {
		if(validNome && validData && validEmail && validSenha && validConfirmarSenha){
	
		} else {
			alert("Preencha todos os campos.")
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