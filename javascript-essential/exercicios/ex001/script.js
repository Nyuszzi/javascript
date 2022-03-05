const car = {
    name: "Mercedes c180",
    price: 237000,
    color: {
        internal: "gray",
        external: "black",
        wheels: "white",
    },
    weight: 1500,
    maxSpeed: 290,
    engine: 4.0,
    gps: false,

    changeEngine: function(newEngine){
        if(newEngine == 1.0){
            this.engine = newEngine;
            this.maxSpeed = 225;
            console.log("Engine " + newEngine + " was installed!");
        }
        this.engine = newEngine;
        console.log("Engine " + newEngine + " was installed!");
    },

    changeColor: function(newInternal, newExternal, newWheels){
        this.color.internal = newInternal;
        this.color.external = newExternal;
        this.color.wheels = newWheels;
        console.log("The inner color has been changed to " + newInternal);
        console.log("The outer color has been changed to " + newExternal);
        console.log("The colors of the wheels have been changed to " + newWheels);
    },

    buyGps: function(){
        this.gps = true;
        console.log("GPS was installed!");
    },
    
    sellGps: function(){
        this.gps = false;
        console.log("Gps was sold!");
    },
}