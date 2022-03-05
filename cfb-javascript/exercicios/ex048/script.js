
function definePainel(){
    let propriedades = event.target;
    let painel = document.querySelector("#painel");
    painel.innerHTML = "Modelo: " + propriedades.dataset.modelo + "<br> Cor: " + propriedades.dataset.cor + "<br> Potência: " + propriedades.dataset.potencia + "<br> Velocidade: " + propriedades.dataset.velocidade; 
};

function inicia(){
    document.querySelector("#c1").addEventListener("click", definePainel);
    document.querySelector("#c2").addEventListener("click", definePainel);
    document.querySelector("#c3").addEventListener("click", definePainel);
    document.querySelector("#c4").addEventListener("click", definePainel);
};

window.addEventListener("load", inicia);
