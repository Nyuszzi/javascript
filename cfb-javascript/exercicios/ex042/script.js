
function inicia(){
    var btn = document.querySelector(".btnDestaque").addEventListener("click", function(){
        let txt = document.querySelector(".fnum").value;
        let p = document.getElementsByTagName("p");
        for(let i = 0; i<p.length; i++){
            p[i].removeAttribute("style");
        }
        let at = document.createAttribute("style");
        at.value="color:red; font-weight:bold";
        p[txt].setAttributeNode(at);

    });
    
};

window.addEventListener("load", inicia);