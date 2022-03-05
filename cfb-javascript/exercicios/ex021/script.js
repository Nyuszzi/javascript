
var tabela = document.querySelector(".tb1");
var nota;

for(let i = 1; i<tabela.rows.length; i++){
    nota = parseFloat(tabela.rows[i].cells[1].innerHTML) + parseFloat(tabela.rows[i].cells[2].innerHTML);
    tabela.rows[i].cells[3].innerHTML = nota;
};

var a = [document.querySelector("#n1"), document.querySelector("#n2"), document.querySelector("#n3"), document.querySelector("#n4")];

a.forEach((item) => {
    if(item.innerHTML < 70){
        item.style.color = "red";
    } else {
        item.style.color = "blue";
    }
});
