
var somar = new Function("n1, n2", "return n1 + n2");

console.log(somar(1, 2));
console.log(somar);

var somar = (p1, p2) => {
    return p1 + p2;
};

console.log(somar(49, 51));

var somar = (...numeros) => {
    let resultado = 0;
    for(n of numeros){
        resultado += n;
    };
    return resultado;
};

console.log(somar(10, 20, 10, 20, 10));

const par = num => {
    return num % 2 == 0? true : false;
};

console.log(par(3) ? "Par" : "Ímpar");
