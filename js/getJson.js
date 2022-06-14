'use strict'

import{abrirNovoRegistro, fecharNovoRegistro, finalizarFechamento} from'./modal.js'
import{lerClientes, deletarRegistro, createRegistro} from './cliente.js'

//cria o registro do estacionamento
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

//atualiza o registro do estacionamento
const atualizarTabela = async () =>{
    const registroContainer = document.getElementById('container-registros')

    const registro = await lerClientes()

    
    const linhas = registro.map(criarLinha)
    registroContainer.replaceChildren(...linhas)
}

const salvarRegistro = async () => {

    const form = document.getElementById('modal-form')

    const registro ={
        nome_cliente: document.getElementById("nome").value,
        placa_veiculo: document.getElementById("placa").value,
        modelo_veiculo: document.getElementById("veiculo").value
    };

    await createRegistro(registro)
    
    fecharNovoRegistro()

    atualizarTabela()
}


















//faz o delete do registro
globalThis.delRegistro = async (id) => {
    await deletarRegistro(id)
    atualizarTabela()

}

//da a função aos botões
document.getElementById("btnFinalizar").addEventListener("click", salvarRegistro);
document.getElementById('btnAddVeiculo').addEventListener('click', abrirNovoRegistro);
atualizarTabela();
