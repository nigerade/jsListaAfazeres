// cria função BotaoDeleta
const BotaoDeleta = () => {
    // declara var botaoDeleta
    const botaoDeleta = document.createElement('button')

    // adiciona a classe com o estilo do css
    botaoDeleta.classList.add('delete-button')
    // ao criar preenche o botão com o texto: deletar
    botaoDeleta.innerText = 'deletar'

    // ao clicar nesse botão executa a função deletarTarefa
    botaoDeleta.addEventListener('click', deletarTarefa)

    return botaoDeleta
}

// cria função deletarTarefa
const deletarTarefa = (evento) => {
    // declara função botaoDeleta com target para poder ser clicada e removida
    const botaoDeleta = evento.target
    const tarefaCompleta = botaoDeleta.parentElement

    // remove o botão
    tarefaCompleta.remove()

    return botaoDeleta

}

// exporta a função BotaoDeleta para ser usada no main.js
// EXPLICAÇÃO: não permite que o usuário veja os comandos da função pelo console ao digitar o nome da função
export default BotaoDeleta
