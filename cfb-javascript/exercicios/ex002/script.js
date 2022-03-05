function numeroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let dado1 = numeroAleatorio(1, 6);
let dado2 = numeroAleatorio(1, 6);
let resultado = dado1 + dado2 > 8 ? "Ganhou" : "Perdeu"

if((dado1 + dado2) == 12){
    resultado += "\n" + "12!!!";
};
if((dado1 + dado2) == 2){
    resultado += "\n" + "2...";
};

alert("Primeiro valor: " + dado1);
alert("Segundo valor: " + dado2);
alert(resultado);
