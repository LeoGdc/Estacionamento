'use strict'

import{fecharNovoRegistro, abrirFechamento, abrirNovoRegistro, finalizarFechamento} from'./modal.js'
import{lerClientes, novoCliente, atualizarRegistro, deletarRegistro} from './cliente.js'

const criarLinha = ({nome_cliente, placa_veiculo, modelo_veiculo, entrada, saida, id})=>{

    
    const linha = document.createElement('tr')
    linha.innerHTML = `
    <td id="dkTheme-tblConteudo" class="TblConteudo">${nome_cliente}</td>
    <td id="dkTheme-tblConteudo" class="TblConteudo">${modelo_veiculo}</td>
    <td id="dkTheme-tblConteudo" class="TblConteudo">${placa_veiculo}</td>
    <td id="dkTheme-tblConteudo" class="TblConteudo">${entrada}</td>
    <td id="dkTheme-tblConteudo" class="TblConteudo">${saida}</td>
    <td id="dkTheme-tblConteudo" class="TblConteudo">
        <button id="editar"
        onClick="editRegistro(${id})">Editar</button>
    </td>
    <td id="dkTheme-tblConteudo" class="TblConteudo">
        <button id="deletar" onClick="delRegistro(${id})" >Encerrar</button>
    </td>  
    `
    return linha

}

const atualizarTabela = async () =>{
    const registroContainer = document.getElementById('container-registros')

    const registro = await lerClientes()

    
    const linhas = registro.map(criarLinha)
    registroContainer.replaceChildren(...linhas)
}

const ehEdicao = () => document.getElementById('nome').hasAttribute('data.id')

const salvarRegistro = async () => {

    const form = document.getElementById('modal-form')

    const registro = {
        "nome_cliente": document.getElementById('nome').value,
        "modelo_veiculo": document.getElementById('veiculo').value,
        "placa_veiculo": document.getElementById('placa').value
    }

    if(form.reportValidity()){
        registro.id = document.getElementById('nome').dataset.id
        await atualizarTabela(registro)
    }else{
        await novoCliente(registro)
    }

    fecharNovoRegistro()

    atualizarTabela()

}

const preencherForm = (cliente) => {
    document.getElementById('nome').value = registro.nome_cliente
    document.getElementById('veiculo').value = registro.modelo_veiculo
    document.getElementById('placa').value = registro.placa_veiculo
}

globalThis.editRegistro = async(id) =>{

    const registro = await lerClientes(id)

    console.log(registro)

    preencherForm(registro)

    abrirNovoRegistro()

}

globalThis.delRegistro = async (id) => {
    await deletarRegistro(id)
    atualizarTabela()

}



document.getElementById('btnFinalizar').addEventListener('click', salvarRegistro)
document.getElementById('btnAddVeiculo').addEventListener('click', abrirNovoRegistro)
atualizarTabela();