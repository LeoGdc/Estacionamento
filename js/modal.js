'use strict'

const abrirNovoRegistro = () => document.getElementById('modal').classList.add('active')

const fecharNovoRegistro = () => {
    document.getElementById('modal').classList.remove('active')
    document.getElementById('modal-form').reset()
}

const abrirFechamento = () => {
    document.getElementById('fechamento').classList.add('active')
}

const finalizarFechamento = () => {
    document.getElementById('fechamento').classList.remove('active')
}

document.getElementById('btnAddVeiculo').addEventListener('click', abrirNovoRegistro)

document.getElementById('btnFecharRegistro').addEventListener('click', fecharNovoRegistro)

// document.getElementById('buttonFinalizar').addEventListener('click', finalizarFechamento)

// document.getElementById('deletar').addEventListener('click', abrirFechamento)

// document.getElementById('print').addEventListener('click', ()=>print())

export{
    fecharNovoRegistro,
    abrirFechamento,
    abrirNovoRegistro,
    finalizarFechamento
}