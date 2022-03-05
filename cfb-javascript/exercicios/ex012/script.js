
let forml = document.forms.length;

let aside1 = document.querySelector(".aside1");
aside1.innerHTML = "Quantidade de formulários: " + forml;
// O USO DO DEFER NÃO PERMITE O MÉTODO DOCUMENT WRITE
console.log(forml);

let ele = document.forms["curso1"].elements[0].value;
console.log(ele);

aside1.innerHTML += " Apontando para o elemento: " + ele;

let form1 = document.forms[0];
let elem = form1.elements;

elem[0].style.backgroundColor="#0e0";
elem[0].value = "Novo texto";

for(let i=0; i<elem.length-2; i++){
    elem[i].style.backgroundColor="#0e0";
    elem[i].value = "Novo texto";
};
