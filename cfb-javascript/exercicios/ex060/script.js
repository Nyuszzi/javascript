
let num = [4, 4, 4, 1, 1, 6, 1, 4, 9];

let iterador = num[Symbol.iterator]();
//let proximo = iterador.next().value;
let tamanho = num.length;

/*
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
*/

for(i in num){
     let valor = iterador.next().value;
     console.log(valor % 2 == 0 ? "Par" : "Ímpar");
};

console.log("Tamanho: " + tamanho);

