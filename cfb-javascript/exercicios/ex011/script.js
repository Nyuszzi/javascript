
const randomColor = () => {
    let hexColor = Math.floor(Math.random() * 16777215).toString(16);
    return hexColor;
};

let paragrafo = document.querySelector("p");
paragrafo.style.fontSize="30px";
paragrafo.style.textAlign="center";

let paragrafotxt = paragrafo.innerHTML;
alert(paragrafotxt);

document.getElementById("caixa").style.backgroundColor=`#${randomColor()}`;

document.querySelectorAll(".randC").forEach(item => {
    item.style.backgroundColor=`#${randomColor()}`;
});

let inpText = document.querySelector(".inpText").value = "Curso de Javascript";

let prompttxt = prompt("Digite o texto da div");
document.querySelector(".dv").innerHTML = prompttxt;




