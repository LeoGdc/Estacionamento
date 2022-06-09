'use strict'

const url = 'http://localhost/leonardo/ProjetoEstacionamento/api/registros'

const lerRegistros = async (id='') => {
    const response = await fetch(`${url}/${id}`)
    return await response.json()

}
const criarLinha = ({nome_cliente, modelo_veiculo, placa_veiculo, entrada, saida})=>{
const linha = document.createElement('tr')
    linha.innerHTML = `
            <td id="dkTheme-tblConteudo" class="TblConteudo">${nome_cliente}</td>
            <td id="dkTheme-tblConteudo" class="TblConteudo">${modelo_veiculo}</td>
            <td id="dkTheme-tblConteudo" class="TblConteudo">${placa_veiculo}</td>
            <td id="dkTheme-tblConteudo" class="TblConteudo">${entrada}</td>
            <td id="dkTheme-tblConteudo" class="TblConteudo">${saida}</td>
            <td id="dkTheme-tblConteudo" class="TblConteudo">
                <button id="editar">Editar</button>
            </td>
            <td id="dkTheme-tblConteudo" class="TblConteudo">
                <button id="deletar">Encerrar</button>
            </td>  
        `

        return linha
}