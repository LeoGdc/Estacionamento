'use strict'

function changeButton(){
    const btnConfirmar = document.getElementById("btnConfirmar");
    btnConfirmar.disabled = !btnConfirmar.disabled;
}
function changeButtonEditar(){
    const btnEditar = document.getElementById("btnEditar");
    btnEditar.disabled = !btnEditar.disabled;
}
function changeBoxEdit1(){
    const inputBoxEdit = document.getElementById("inputBoxEdit1");
    inputBoxEdit.disabled =  !inputBoxEdit.disabled;
}
function changeBoxEdit2(){
    const inputBoxEdit = document.getElementById("inputBoxEdit2");
    inputBoxEdit.disabled =  !inputBoxEdit.disabled;
}
function changeBoxEdit3(){
    const inputBoxEdit = document.getElementById("inputBoxEdit3");
    inputBoxEdit.disabled =  !inputBoxEdit.disabled;
}
function reloadPage(){
    window.location.reload();
 }
function allfunctions(){
    changeButton();
    changeBoxEdit1();
    changeBoxEdit2();
    changeBoxEdit3();
    changeButtonEditar();

}
function confirmeReset(){
    window.location.reload();
    alert("Alterado")
}

document.getElementById('btnEditar').addEventListener('click', allfunctions)
document.getElementById('btnConfirmar').addEventListener('click',confirmeReset)