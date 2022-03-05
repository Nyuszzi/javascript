
function * cores(){
    yield "Vermelho";
    yield "Verde";
    yield "Azul";
    yield "Amarelo";
    yield "Roxo";
    yield "Preto";
    yield "Branco"
};

/*for(let c of cores()){
    console.log(c);
};*/

const c = cores();

console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());

function * cont(numero){
    let c = 0;
    while(c < numero){
        yield console.log(c);
        c++;
    };
};

const ct = cont(10);

console.log(ct.next());
console.log(ct.next());
console.log(ct.next());
console.log(ct.next());
console.log(ct.next());
console.log(ct.next());
console.log(ct.next());
console.log(ct.next());
console.log(ct.next());
console.log(ct.next());
console.log(ct.next());



