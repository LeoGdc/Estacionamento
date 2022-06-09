const url ='http://localhost/leonardo/ProjetoEstacionamento/api/registros'
fetch(url)
.then(function(response){
    return response.json();
})
.then(function(tabela){
    const clientes = json.fastparking[0].registros;

    let placeholder = document.querySelector("#tabela");
    let out = `
                <tr id="trTitulo">
                    <th id="dkTheme-tblTitulo" class="tblTitulo">Nome</th>
                    <th id="dkTheme-tblTitulo" class="tblTitulo">Veículo</th>
                    <th id="dkTheme-tblTitulo" class="tblTitulo">Placa</th>
                    <th id="dkTheme-tblTitulo" class="tblTitulo">Data</th>
                    <th id="dkTheme-tblTitulo" class="tblTitulo">H.Entrada</th>
                    <th id="dkTheme-tblTitulo" class="tblTitulo">Editar</th>
                    <th id="dkTheme-tblTitulo" class="tblTitulo">Encerrar</th>
                </tr>
    `;
    for(let cliente of clientes){

        out +=`
      
            <tr class="trConteudo">
                    <td id="dkTheme-tblConteudo" class="TblConteudo">${cliente.nome}</td>
                    <td id="dkTheme-tblConteudo" class="TblConteudo">${cliente.veiculo}</td>
                    <td id="dkTheme-tblConteudo" class="TblConteudo">${cliente.placa}</td>
                    <td id="dkTheme-tblConteudo" class="TblConteudo">${cliente.dataEntrada}</td>
                    <td id="dkTheme-tblConteudo" class="TblConteudo">${cliente.horaSaida}</td>
                    <td id="dkTheme-tblConteudo" class="TblConteudo">
                        <button id="editar">Editar</button>
                    </td>
                    <td id="dkTheme-tblConteudo" class="TblConteudo">
                        <button id="deletar">Encerrar</button>
                    </td>     
                </tr> 
        `;
    }
    placeholder.innerHTML = out;
}
)
document.getElementById('print').addEventListener('click', ()=>print())