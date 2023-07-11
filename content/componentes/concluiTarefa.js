// cria a funcao BotaoConclui
const BotaoConclui = () => {
    // declara a var botaConclui para poder concluir
    const botaoConclui = document.createElement('button')

    // adiciona a classe com o estilo do css
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir' // preenche com o texto: concluir

    // ao clicar nesse botão executa a função: concluirTarefa
    botaoConclui.addEventListener('click', concluirTarefa)

    return botaoConclui

}

//cria função concluirTarefa
const concluirTarefa = (evento) => {
    // declara a var botaoConcluir para poder ser clicado e modificado
    const botaoConclui = evento.target
    const tarefaCompleta = botaoConclui.parentElement

    // modifica o estilo da class css para: done (risca o texto)
    tarefaCompleta.classList.toggle('done')
}

// exporta a função BotaoConclui para ser usada no main.js
// EXPLICAÇÃO: não permite que o usuário veja os comandos da função pelo console ao digitar o nome da função
export default BotaoConclui

