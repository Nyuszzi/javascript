let num;

try{
    num = prompt("Digite um valor (0-10): ");
    if(num < 0 || num > 10){
        throw new Error("Valor inválido! Números apenas entre 0 e 10!");
    };
    document.write("Valor: " + num);
} catch (erro){
    document.write("Erro: ", erro.message);
    console.log("Mensagem de erro: ", erro);
} finally{
    document.write("<br>Fim do tratamento de erro.");
};
