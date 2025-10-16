const listStudent = [
    { name: 'Pietro Rodrigues de Jesus', b1: 25, b2: 20, b3: 15, b4: 10 },
    { name: 'Juliana Patricia', b1: 25, b2: 20, b3: 15, b4: 10 },
    { name: 'Lucas Ferreira', b1: 10, b2: 20, b3: 10, b4: 10 },
    { name: 'Iranilda Souza', b1: 15, b2: 10, b3: 11, b4: 10 },
    { name: 'Divino Antonio', b1: 15, b2: 15, b3: 15, b4: 15 },
    { name: 'Marco Tulio Rodrigues', b1: 25, b2: 15, b3: 17, b4: 17 },
    { name: 'Mariah de Jesus', b1: 25, b2: 10, b3: 25, b4: 10 },
    { name: 'Lara Rdorigues', b1: 25, b2: 25, b3: 10, b4: 10 },
    { name: 'Michele de Rosa', b1: 17, b2: 9, b3: 20.5, b4: 10 },
]

const newList = listStudent.map(user => {
    const total = user.b1 + user.b2 + user.b3 + user.b4
    return {
        name: user.name,
        status: total >= 60 ? 'Aprovado' : 'Reprovado',
        total: total
    }
}

)

const mediaB1 = listStudent.reduce((medB1, value) => {
    return medB1 + value.b1
}, 0)

const mediaB2 = listStudent.reduce((medB2, value) => {
    return medB2 + value.b2

}, 0)

const mediaB3 = listStudent.reduce((medB3, value) => {
    return medB3 + value.b3

}, 0)

const mediaB4 = listStudent.reduce((medB4, value) => {
    return medB4 + value.b4

}, 0)

const listAprovado = newList.filter(total => {
    if (total.total >= 60) {
        return true
    } else return false

})

const listReprovado = newList.filter(total => {
    if (total.total < 60) {
        return true
    } else return false

})

// console.log(listReprovado)
// console.log(listAprovado)
// console.log(newList)
// console.log((mediaB1 / listStudent.length).toFixed(2) + ' Está é a media do b1')
// console.log((mediaB2 / listStudent.length).toFixed(2) + ' Está é a media do b2')
// console.log((mediaB3 / listStudent.length).toFixed(2) + ' Está é a media do b3')
// console.log((mediaB4 / listStudent.length).toFixed(2) + ' Está é a media do b4')
// console.log(listStudent.length + ' Essa e quantidade de alunos')

let containerAlunos = document.querySelector(".frameprodutos")
let textoPesquisa = ""
let categoriaAtual = "todos"
let input = document.querySelector(".botaopesquisa")
let todosBotoes = document.querySelectorAll(".botaomenu")

function mostrarAlunos() {

    let htmlAlunos = ""

    let alunosFiltrados = newList.filter(prd => {

        let passouCategoria = (categoriaAtual === "todos" || prd.status === categoriaAtual)
        let passouPesquisa = prd.name.toLocaleLowerCase().includes(textoPesquisa.toLocaleLowerCase())

        return passouPesquisa && passouCategoria

    })

    alunosFiltrados.forEach(user => {
        htmlAlunos = htmlAlunos + `
            <div class="grid-produto" >
                    <h3 class="nome-produto">Nome do Aluno:<br> ${user.name}</h3>
                    <p class="descricao-produto">A sua nota foi: ${user.total} pontos</p>
                    <p class="preco-produto">  ${user.status}</p>
                    </div>

            </div>
            `

    })
    containerAlunos.innerHTML = htmlAlunos

}


function pesquisar() {
    textoPesquisa = input.value
    mostrarAlunos()
}

function trocarCategoria(status) {
    categoriaAtual = status

    todosBotoes.forEach(botao => {
        botao.classList.remove("ativo")
        if (botao.getAttribute("data-category") === status) {
            botao.classList.add("ativo")
        }


    })
    mostrarAlunos()

}

window.addEventListener('DOMContentLoaded', () => {
mostrarAlunos()
input.addEventListener('input', pesquisar)

todosBotoes.forEach (botao => {
    botao.addEventListener('click', () => {
        let categoria = botao.getAttribute("data-category")
    trocarCategoria(categoria)
    
    })
})


})