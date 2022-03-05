let cor = ["black", "red", "purple", "yellow", "blue"];

cor.push("cyan");

document.write(cor.join(" | "));
document.write("<br> Valor do índice ",  cor.indexOf("purple") ,": ", cor[2], "<br>");

let itens = ["Faca", "Espada", "Corda", "Lanterna", "Pedra", "Livro", "Bola", "Carro", "Caixa", "Garrafa"];
let mochila = [];

mochila.push(itens[2], itens[4], itens[5], itens[7], itens[8]);
mochila.unshift(itens[1], itens[9]);

document.write("Itens da mochila: ", mochila.join("<br>"));

mochila.pop();
mochila.shift();
mochila.splice(3,1);

document.write("<br> Itens da mochila: ", mochila.join(" | "));

let num = ["1", "5", "6", "8", "3", "4", "9"];
document.write("<br>", num.sort().join(" | "));
document.write("<br>", num.reverse().join(" | "));

let copiaNum = num.join();
document.write("<br>Valores de cópia de num (sem ser array):", copiaNum);

document.write("<br>Array de mochila e num concatenados: ", mochila.concat(num).join(" | "));

mochila.unshift(num.pop());

document.write("<br>Array de mochila e num concatenados com o último elemento de num no início de mochila: ", mochila.concat(num).join(" | "));

a1 = ["|X|", "|X|", "|O|"];
a2 = ["|O|", "|O|", "|X|"];
a3 = ["|X|", "|O|", "|X|"];

document.write("<br>",a1,"<br>",a2,"<br>",a3);
