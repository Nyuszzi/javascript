
for (let cont = 0; cont <= 10; cont++){
    document.write(cont, "<br>");
}

let array1 = [];

for (let cont = 0; cont<5; cont++){
    array1.push(prompt("Digite um número"));
}

document.write("Números digitados: ", array1.join(" | "));
document.write("<br>");

let mochila = [["Corda", 2], ["Faca", 3], ["Agua", 3], ["Martelo", 1]];

for (let linha = 0; linha<=3; linha++){
    for(let coluna = 0; coluna<=1; coluna++){
        document.write(mochila[linha][coluna], " ");
    };
    document.write("<br>");
};
