const $ = document.querySelector.bind(document)

function NavegacaoAbas() {
    
    const html = {
        links: [...$('.links-abas').children],
        contents: [...$('.conteudo-abas').children],
        openTab: $('[data-open]')
    }

    function esconderTodoConteudoAbas (){
        html.contents.forEach(section => {
            section.style.display = "none"
        })
    }

    function mostrarAbaAtual(id){
        const tabcontent = $('#' + id)
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

function MostrarSenhaEntrar() {
	  
	let btn = document.querySelector(".fa-eye")
	
		btn.addEventListener("click", ()=>{
			let inputSenha = document.querySelector("#senha")

			if(inputSenha.getAttribute("type") == "password"){
					inputSenha.setAttribute("type" , "type")
				} else {
					inputSenha.setAttribute("type", "password")
				}
		}) 
}

function MostrarSenhaCadastro() {

	let btnConfirm = document.querySelector("#verConfirmarSenha")

		btnConfirm.addEventListener("click", ()=>{
			let inputConfirmarSenha = document.querySelector("#confirmar-senha")

			if(inputConfirmarSenha.getAttribute("type") == "password"){
					inputConfirmarSenha.setAttribute("type" , "type")
			} else {
					inputConfirmarSenha.setAttribute("type", "password")
			}
		})
}

function ValidarSenha() {
	let senha = $("#senhaCadastro")
	let confirmarSenha = $("#confirmar-senha")

	confirmarSenha.addEventListener("keyup", () => {
		if(senha.value != confirmarSenha.value) {
			confirmarSenha.setAttribute("style", "border-color: red")
		} else {
			confirmarSenha.setAttribute("style", "border-color: green")
		}
	})
}

window.addEventListener('load', () => {
	const navegacaoAbas = NavegacaoAbas()
	navegacaoAbas.iniciar()
	MostrarSenhaEntrar();
	MostrarSenhaCadastro();
	ValidarSenha();

})

