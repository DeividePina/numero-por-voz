function verificaChuteValido (chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido</div>`
        return
    }
    if (numeroForaDosParametros(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido, o número informado deve ser ${menorValor} à ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `<h3>Meus parabéns você acertou</h3><p>O número é ${numeroSecreto}´</p><button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>`
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menos <i class="fa-solid fa-down-long"></i></div>`
    } else {
        elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>'
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForaDosParametros(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})