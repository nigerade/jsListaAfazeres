// puxa as funções do botão (export)
import BotaoConclui from './componentes/concluiTarefa.js'
import BotaoDeleta from './componentes/deletaTarefa.js'

//cria a funcao de criar tarefa
const criarTarefa = (evento) => {
    // não deixa recarregar a página
    evento.preventDefault()

    // cria variáveis puxando por seletor data
    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value // o que o usuário digita no input

    // cria um novo li e adiciona a classe task
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${valor}</p>`
    // prenche com o que o usuário digitou

    tarefa.innerHTML = conteudo

    // permite adicionar outros, senão apenas mudaria 1 para o outro
    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa)
    input.value = " " // ao deletar tira o conteúdo

}

// cria variavel para poder clicar no botão e criar nova tarefa
const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)
// ao clicar no botao de criar tarefa, cria uma nova tarefa
