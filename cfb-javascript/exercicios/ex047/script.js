
setInterval(foco(), 0);

function foco(){
    let resultado = document.querySelector(".span");
    let painel = document.querySelector(".divPainel");
    if(document.hasFocus()){
        resultado.innerHTML = "";
        painel.style.display = "none";
    } else {
        resultado.innerHTML = "não";
        painel.style.display = "block";
    };
};



window.addEventListener("load", foco);