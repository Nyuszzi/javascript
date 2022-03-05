let pontos = 81;
let energia = 60;

if((pontos >= 30) && (pontos <= 40) && (energia >=40)|| (pontos >= 70) && (pontos <= 80) && (energia >=20)){
    document.write("Pontuação:", pontos, "<br>");
    document.write("Energia:", energia, "<br>");
    document.write("Ganhou! <br>");
} else {
    document.write("Pontuação: ", pontos, "<br>");
    document.write("Energia: ", energia, "<br>");
    document.write("Perdeu! <br><br>");
};

document.write("Fim!");