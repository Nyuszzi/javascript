
function rolar(){
    let objeto = event.target.dataset.nome;
    document.querySelector(`#${objeto}`).scrollIntoView();
    //document.getElementById(objeto).scrollIntoView();
};

function inicia(){
    document.querySelector("#btnc1").addEventListener("click", rolar);
    document.querySelector("#btnc2").addEventListener("click", rolar);
    document.querySelector("#btnc3").addEventListener("click", rolar);
    document.querySelector("#btnc4").addEventListener("click", rolar);
};

window.addEventListener("load", inicia);
