function Entrar() {
	/* Ver senhas */
	const btn = document.querySelector(".fa-eye");
	const btnSenhaCadastro = document.querySelector("#verSenha")
	const btnConfirm = document.querySelector("#verConfirmarSenha")
	/* Inputs */
	const inputSenha = document.querySelector("#senha")
	const inputSenhaCadastro = document.querySelector("#senhaCadastro")
	const inputConfirmarSenha = document.querySelector("#confirmar-senha")
	/* Comparação das Senhas */
	const confirmarSenha = document.querySelector("#confirmar-senha")
	
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

	function compararSenhas() {

		confirmarSenha.addEventListener("keyup", () => {
			if(inputSenhaCadastro.value != confirmarSenha.value) {
				confirmarSenha.setAttribute("style", "border-color: red")
			} else {
				confirmarSenha.setAttribute("style", "border-color: green")
			}
		})
	}

	function cadastrar() {
	
	}

	function iniciar() {

		const navegacaoAbas = NavegacaoAbas()
		navegacaoAbas.iniciar();

		const mostrarSenhas = MostrarSenhas()
		mostrarSenhas.iniciar();
		
		compararSenhas();
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