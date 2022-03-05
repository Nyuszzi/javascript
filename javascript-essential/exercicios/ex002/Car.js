class Car{
    constructor(
        //parameters
        name,
        weight,
        innerColor,
        outerColor,
        engine,
        gear,
        maxSpeed,
        seat
    ) {
        //properties
        this.name = name;
        this.weight = weight;
        this.innerColor = innerColor;
        this.outerColor = outerColor;
        this.engine = engine;
        this.gear = gear;
        this.maxSpeed = maxSpeed;
        this.seat = seat;
    }
    //methods
    changeColor(newInner, newOuter){
        this.innerColor = newInner;
        this.outerColor = newOuter;
        console.log(this.name, "inner color was changed to ", newInner);
        console.log(this.name, "outer color was changed to ", newOuter);
    }
    changeEngine(newEngine){
        this.engine = newEngine;
        console.log(this.name, " engine was changed to ", newEngine);
    }
}
export default Car