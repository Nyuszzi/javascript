
var qtde;
var painel;

function inicia(){
    qtde = window.length;
    painel = document.querySelector(".painel");
    painel.innerHTML = qtde

    for(var i = 0; i < qtde; i++){
        //window.frames[i].location="../ex030/index.html";
        window.frames[i].location="p2.html";
    }
};

inicia();