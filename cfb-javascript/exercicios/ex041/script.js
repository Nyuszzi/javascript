
var p = document.createElement("p");
p.textContent = "Curso de javascript ";

var t = document.createTextNode("Curso de Javascript ");

document.body.prepend(p);
p.appendChild(t);

function inicia(){
    document.querySelector(".btnContar").addEventListener("click", function(){
        let lista = document.querySelector(".listaElementos");
        let num = lista.childNodes.length;
        alert("Número de elementos da lista: " + num);
    });

    document.querySelector(".btnAdd").addEventListener("click", function(){
        let lista = document.querySelector(".listaElementos");
        let li = document.createElement("li");
        let texto = document.querySelector(".fnovo").value;
        li.textContent = texto;
        lista.insertBefore(li, lista.childNodes[0]);
    });
};

window.addEventListener("load", inicia);
