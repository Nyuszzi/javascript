let nota = 90;
var res;

document.write("Nota final: ", nota, "!<br>");

if (nota >= 60){
    res = "Aprovado ";
    if (nota >= 95) {
        res += "com nota acima de 95! Parabens!";
    }
} else if (nota>= 40) {
    res = "Dependência!";
} else {
    res = "Reprovado ";
    if (nota >= 10){
        res += "por nota baixa";
    } else {
        res += "com nota abaixo de 10!";
    }
}

document.write(res);