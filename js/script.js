//DOM
const distancia = document.querySelector('#distancia')
const consumo = document.querySelector('#consumo')
const preco = document.querySelector('#preco')
const btcalcular = document.querySelector('#btcalcular')
const resultado = document.querySelector('#resultado')

//evento
btcalcular.addEventListener('click', viagem)

//funções
function viagem(){
    
    d = Number(distancia.value)
    c = Number(consumo.value)
    p = Number(preco.value)

    formula = (d/c)*p

    resultado.textContent = `O valor gasto para a viagem será de: R$ ${formula.toFixed(2)}`
}