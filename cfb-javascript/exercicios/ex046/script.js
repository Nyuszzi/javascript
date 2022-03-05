
var divCaixa;

function inicia(){
    let texto = document.querySelector("#txtOriginal");
    texto.addEventListener("mouseup", ativo);
};


function ativo(){
    let caixa = document.querySelector(".txtSelecionado");
    let elemento = document.activeElement;
    let selecao = elemento.value.substring(elemento.selectionStart, elemento.selectionEnd);
    caixa.innerHTML = selecao;

    /*document.querySelector(".txtSelecionado").innerHTML = document.activeElement.value.substring(document.activeElement.selectionStart, document.activeElement.selectionEnd);*/
};

window.addEventListener("load", inicia);
