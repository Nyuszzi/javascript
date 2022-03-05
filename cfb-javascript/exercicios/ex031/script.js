
 var minhaJanela, minhaJanela2; 

function abreJ(){
    /*var minhaJanela = window.open("janela.html", "frame");
    var minhaJanela = window.open("janela.html", "_blank", "width=300, height=300");
    */
   minhaJanela = window.open("janela.html", "_blank", "width=300, height=300, top=300, left=300");
};

function fechaJ(){
    minhaJanela.close();
};
