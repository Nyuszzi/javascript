
function pagina(pg){
    sessionStorage.nome = document.querySelector(".inome").value;
    window.location.assign("p" + pg + ".html");

    /*if(pg == 2){
        window.location.assign("p2.html");
    } else if (pg == 3){
        window.location.assign("p3.html");
    };*/
};

function inicia(){
    document.querySelector(".btnP2").addEventListener("click", function(){
        pagina(2);
    });
    document.querySelector(".btnP3").addEventListener("click", function(){
        pagina(3);
    });
    document.querySelector(".btnLSS").addEventListener("click", function(){
        sessionStorage.clear();
    })
};

window.addEventListener("load", inicia);