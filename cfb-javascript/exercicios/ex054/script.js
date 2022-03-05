
/*function soma(...parametros){
    let resultado = 0;
    let quantidade = parametros.length;
    for(let i = 0; i < quantidade; i++){
        resultado += parametros[i];
    };
    return resultado;
};*/

/*function soma(...parametros){
    let resultado = 0;
    for(let i of parametros){
        resultado += i
    };
    return resultado;
};*/

function soma(...parametros){
    let resultado = 0;
    for(let i in parametros){
        resultado += parametros[i];
    };
    return resultado;
};



console.log(soma(3, 4, 5, 5, 2 ,1));
