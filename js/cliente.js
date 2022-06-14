'use strict'

// abra a conexão com a API
const url = 'http://localhost/leonardo/Estacionamento/api/registros'

//puxa o JSON da APi
const lerClientes = async () => {
    const response = await fetch(`${url}`)
    return await response.json()
}

//apaga os dados da APi
const deletarRegistro = async (posicao) => {
    const opcoes = {
        'method':'DELETE'
    }

    const response = await fetch(`${url}/${posicao}`, opcoes)

    if(response.ok){
        alert('Cliente Apagado com sucesso')
    }
    
}

const createRegistro = async (registro) => {
    const opcoes = {
        method : "POST",
        body : JSON.stringify(registro),
        headers:{
            "content-type": "application/json"
        }
    }

    const response = await fetch(url, opcoes);

    console.log(response);
};



export{
    lerClientes,
    deletarRegistro,
    createRegistro
}