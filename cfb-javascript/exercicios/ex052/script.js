
const notas = [100, 50, 34, 53, 46, 94, 28, 61, 37];

function soma(n1, n2, n3){
    return n1 + n2 + n3;
};

console.log("A soma das 3 primeiras notas foi de: " + soma(...notas))

console.log(notas);
console.log(...notas);

const jogador = [nome = "Bruno", pontos = 1000, vidas = 7];
console.log(...jogador);

const produtos = [
    {id: "001", descricao: ["Mouse", "25.00"]},
    {id: "002", descricao: ["Teclado", "42.00"]},
    {id: "003", descricao: ["Fone de ouvido", "30.00"]}
]

console.log(produtos);
console.log(...produtos);

const p = [...produtos];

console.log(p);

const n1 = [100, 200, 300];
const n2 = [400, 500, 600];
const n3 = [700, 800, 900];
const n4 = [...n1, ...n2, ...n3];

console.log(n4);

const aluno = {nome: "Whatstone", sobrenome: "Schiund" };
const nota = {n1: 39, n2: 53, n3: 85, n4: 68}
const info = {...aluno, ...nota}

console.log(info);

