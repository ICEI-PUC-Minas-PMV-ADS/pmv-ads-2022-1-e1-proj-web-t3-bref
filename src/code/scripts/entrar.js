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

window.addEventListener('load', () => {
    const navegacaoAbas = NavegacaoAbas()
    navegacaoAbas.iniciar()
})
