
function inicia(){
    /*let elemento = document.querySelector(".p3");
    alert(elemento.parentNode.nodeName);
    elemento.remove();*/

    //document.querySelector("p3").remove();

    let elementos = document.querySelector(".divCursos").childNodes;
    document.querySelector(".divCursos").removeChild(elementos[11]);
    //document.querySelector(".divCursos").remove(); Para remover tudo
};

window.addEventListener("load", inicia);
