
function mudaCor(){
    let obj = document.querySelector(".dv1");
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    obj.style.backgroundColor="rgb("+r+","+g+","+b+")";
};

function randomColor(){
    let hexColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + hexColor;
};

let num;

try{
    num = prompt("Digite um valor (0-10): ");
    if(num < 0 || num > 10){
        throw new Error("Valor inválido! Números apenas entre 0 e 10!");
    };
    document.write("Valor: " + num);
} catch (erro){
    document.write("Erro: ", erro.message);
    console.log("Mensagem de erro: ", erro);
} finally{
    document.write("<br>Fim do tratamento de erro.");
};

//let tmp = setTimeout(mudaCor, 1000);

var tmp;

function iniciar(){
    tmp = setInterval(mudaCor, 1000);
};

function parar(){
    clearInterval(tmp);
};

document.querySelector(".btn1").addEventListener("click", iniciar);
document.querySelector(".btn2").addEventListener("click", parar);


function relogio(){
    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundo = data.getSeconds();

    if(hora < 10){
        hora = "0" + hora;
    };

    if(minuto < 10){
        minuto = "0" + minuto;
    };

    if(segundo < 10){
        segundo = "0" + segundo;
    };

    let horas = "Hora do sistema: " + hora + ":" + minuto + ":" + segundo;

    document.querySelector(".rel").value = horas;
};

var tempo = setInterval(relogio, 1000);
