
if(typeof(Storage) != "undefined"){

    localStorage.Curso = "javascript";
    localStorage.removeItem("Curso");

    localStorage.setItem("curso", "Javascript");

    var vCurso = localStorage.getItem("curso");
    //var vCurso = localStorage.curso

    document.write(vCurso);

    if(localStorage.visitas){
        localStorage.visitas = Number(localStorage.visitas) + 1;
    } else {
        //localStorage.setItem("visitas", 1);
        localStorage.visitas = 1;
    };

} else {
    alert("Sem suporte a Web Storage!");
};

document.write("<br> Visitas: " + localStorage.visitas);

var c1, c2, nome;

function defineCor(op, cor){
    if(op==1){
        c1 = document.body.style.backgroundColor = cor;
    } else {
        c2 = document.body.style.color = cor;

    };
};

/*function mudaCor(){
    document.body.style.backgroundColor = cor;
    document.body.style.color = cor;
};*/

function gravar(){
    nome = document.querySelector("#fnome").value;
    localStorage.corFundo = c1;
    localStorage.corTexto = c2;
    localStorage.nome = nome;
    let form = document.querySelector(".dados");
    form.style.display="none";
};

function config(){
    let form = document.querySelector(".dados");
    form.style.display="block";
};

function inicia(){
    if(localStorage.nome){
        defineCor(1, localStorage.corFundo);
        defineCor(0, localStorage.corTexto);
        document.querySelector(".painel").innerHTML = "Bem vindo " + localStorage.nome + "<hr>";
    };
};
window.addEventListener("load", inicia);