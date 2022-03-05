
let soma = function (...parametros){
    let resultado = 0;
    for(i of parametros){
        resultado += i
    };
    return resultado;
};

const alo = function(){
    return "Alô mundo";
}; 

console.log(alo());

console.log(soma(1, 2, 3));
console.log(soma);
