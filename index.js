
const entradaNome = document.getElementById('entrada-nome')
const entradaDescricao = document.getElementById('entrada-descricao')

const botaoMobilidade = document.getElementById('mobilidade')
const acessibilidade = document.getElementById('acessibilidade')
const meioAmbiente = document.getElementById('meio-ambiente')
const QualidadeDeVida = document.getElementById('qualidade-vida')
const gestaoPublica = document.getElementById('gestao-publica')
const eficiencia = document.getElementById('eficiencia')

const enviar = document.getElementById('enviar')
const limpar = document.getElementById('limpar')

const fecharCard = document.getElementById('fechar')

const cardsResultados = document.getElementById('cards-resultado')

const resultados = []
const nome = []
const descricao = []

entradaNome.addEventListener('keyup', () => {
    nome[0] = entradaNome.value
})


entradaDescricao.addEventListener('keyup', () => {
    descricao[0] = entradaDescricao.value
})

botaoMobilidade.addEventListener('click', () => {
    resultados.push("mobilidade")
    console.log(resultados)
})

acessibilidade.addEventListener('click', () => {
    resultados.push("acessibilidade")
    console.log(resultados)
})

meioAmbiente.addEventListener('click', () => {
    resultados.push("meio ambiente")
    console.log(resultados)
})

QualidadeDeVida.addEventListener('click', () => {
    resultados.push("qualidade de vida")
    console.log(resultados)
})

eficiencia.addEventListener('click', () => {
    resultados.push("eficiencia")
    console.log(resultados)
})


enviar.addEventListener('click', () => {

    cardsResultados.innerHTML = `<div class="card w-75">
    <div class="card-body">
      <h6 class="card-title"> Nome: ${nome[0]}</h5>
      <h6 class="card-title"> Descricao :${descricao[0]}</h5>
      <p class="card-text">${resultados}</p>
      <button class="btn btn-primary" id="limpar" type="button">limpar</button>
    </div>
  </div>`

})


limpar.addEventListener('click', () => {
    cardsResultados.innerHTML = " "
})

fecharCard.addEventListener('click', () => {
    cardsResultados.innerHTML = " "
})






