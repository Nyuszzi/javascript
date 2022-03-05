
var dv1;

function trocaOriginal(){
    dv1.style.backgroundImage = "url('carro1.png')";
};

function troca(){
    dv1.style.backgroundImage = "url('carro2.png')";
};

function inicia(){
    dv1 = document.querySelector("#dv1");
    dv1.addEventListener("mouseover", troca);
    dv1.addEventListener("mouseout", trocaOriginal);

};

window.addEventListener("load", inicia);
