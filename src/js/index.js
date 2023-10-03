/*
    O que precisamos fazer? - quando clicar no botão do personagem na lista, temos que marcar o botão como selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botão como selecionado
        passo 1 - pegar os botões no JS para poder verificar quando o usuario clicar em algum deles
        passo 2 - adicionar a classe "selecionado" no botao que o usuario clicou
        passo 3 - verificar se ja existe um botão selecionado, se sim, devemos remover a seleção dele

    OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
        passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele
*/

const botoes = document.querySelectorAll('.botao')
const personagens = document.querySelectorAll('.personagem')

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao()
        desselecionarPersonagem()

        botao.classList.add("selecionado")
        personagens[indice].classList.add("selecionado")
    })
})



function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado")
    personagemSelecionado.classList.remove("selecionado")
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado")
    botaoSelecionado.classList.remove("selecionado")
}

