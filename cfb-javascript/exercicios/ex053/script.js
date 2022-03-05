
const aluno = {nome: "Whatstone", sobrenome: "Schiund" };
const nota = {n1: 39, n2: 53, n3: 85, n4: 68}
const info = {...aluno, ...nota}

for(let i in info){
    console.log(i + ":", info[i]);
};

let notas = [100, 83, 54, 23, 54, 21, 68, 46];
let aprovados = 0;
let reprovados = 0;

for(let n of notas){
    console.log(n);
}

for(let n of notas){
    n >= 70? aprovados++ : reprovados++;
}
console.log("Aprovados: " + aprovados + " Reprovados: " + reprovados);
