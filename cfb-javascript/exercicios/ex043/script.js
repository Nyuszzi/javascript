
function inicia(){
    let novoH1 = document.createElement("h1");
    let listaCursos = document.querySelector(".divCursos");
    let antigoP = listaCursos.childNodes[3];
    let txtH = document.createTextNode(antigoP.innerHTML);
    novoH1.append(txtH);

    listaCursos.replaceChild(novoH1, antigoP);
};

window.addEventListener("load", inicia);

