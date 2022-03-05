
function soma(n1, n2){
    return n1 + n2;
};

document.write(soma(10, 20));

n1 = soma(155, 34);
n2 = soma(33, 57);
n3 = soma (n1, n2);

document.write("<br>", n3);

let numeros = [10, 9, 6, 5 ,26, 23, 53, 98];

function media(numA){
    let tamanho = numA.length;
    let soma = 0;
    for(let i=0; i<tamanho; i++){
        soma+=numA[i];
    };
    return Math.round(soma / tamanho);
};

document.write("<br>Média dos valores: ", media(numeros));
