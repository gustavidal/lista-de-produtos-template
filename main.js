'use strict'

import produtos from "./produtos.json" with { type: "json" }

function definirClasse(categoria) {
    let classe

    if (categoria == 'Informática') {
        classe = 'informatica'
    } else if (categoria == 'Eletrônicos') {
        classe = 'eletronica'
    } else {
        return false
    }

    return classe
}

function definirAvaliacao(avaliacao) {
    let fullStars = avaliacao
    let emptyStars = 5 - avaliacao
    let stars = ''

    for (fullStars; fullStars > 0; fullStars--)
        stars += '★'

    for (emptyStars; emptyStars > 0; emptyStars--)
        stars += '☆'

    return stars
}

function criarCard(produto) {
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = `./img/${produto.imagem}`
    img.alt = `Foto de ${produto.nome}`

    const nome = document.createElement('h3')
    nome.textContent = produto.nome

    const descricao = document.createElement('p')
    descricao.textContent = produto.descricao

    const valor = document.createElement('span')
    valor.textContent = `R$ ${Number(produto.preco)}`

    const categoria = document.createElement('h4')
    categoria.textContent = produto.categoria
    card.classList.add(definirClasse(produto.categoria))

    const avaliacao = document.createElement('h6')
    avaliacao.textContent = definirAvaliacao(produto.classificacao)

    card.append(img, nome, descricao, valor, categoria, avaliacao)

    return card
}

const cards = produtos.map(criarCard)

document.getElementById('container').replaceChildren(...cards)