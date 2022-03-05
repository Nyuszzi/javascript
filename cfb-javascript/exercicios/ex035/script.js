
var painel;

function inicia(){
    painel = document.querySelector(".painel");
    painel.innerHTML += "Largura da tela: " + screen.width + "px <hr>";
    painel.innerHTML += "Altura da tela: " + screen.height + "px <hr>";
    painel.innerHTML += "Largura disponível da tela: " + screen.availWidth + "px <hr>";
    painel.innerHTML += "Altura disponível da tela: " + screen.availHeight + "px <hr>";
    painel.innerHTML += "Profundidade das cores para exibir imagens: " + screen.colorDepth + "bits <hr>";
    painel.innerHTML += "Resolução das cores: " + screen.pixelDepth + "bits/pixel <hr>";



};

window.addEventListener("load", inicia);
