
var painel = document.querySelector(".painel");
var btnT = document.querySelector(".btnT");
var btnP = document.querySelector(".btnP");
var l, a, px, py;

function info(){
    l = window.innerWidth; // outerWidth
    a = window.innerHeight; //outerHeight
    px = window.screenX; 
    py = window.screenY;

    painel.innerHTML = "Largura: " + l + "<br> Altura: " + a + "<br> Posição X: " + px + "<br> Posição Y: " + py;
};

function rolar(){
    window.scrollBy(1000, 1000);
}

btnT.addEventListener("click", info);
btnP.addEventListener("click", rolar);