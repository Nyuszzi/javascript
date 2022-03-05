
function pagina2(){
    location.assign("../ex037/p2.html");
};

function reload(){
    location.reload();
};

function youtube(){
    location.replace("http://youtube.com");//REPLACE REMOVE A URL DO HISTÓRICO 
}

btnP2 = document.querySelector(".btnP2");
btnP2.addEventListener("click", pagina2);

btnReload = document.querySelector(".btnReload");
btnReload.addEventListener("click", reload);

btnReplace = document.querySelector(".btnReplace");
btnReplace.addEventListener("click", youtube);