window.volume = 20;

const greenPack = {
    name: "Frog Pack",
    color: "Green",
    volume: 8,
    pocketNum: 3,
    newVolume: function(volumeParam){
        console.log("this.volume in the method", this.volume);
        this.volume = volumeParam;
        console.log("this.volume after the update", this.volume);
        (function(){
            console.log("this.volume in nested function", this.volume)
        })();
        (() => {
            console.log("this.volume in nested function with arrow function", this.volume)
        })();
    },
};

console.log(greenPack.newVolume(5))