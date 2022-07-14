class Ninja{
    //Member varianle
    //Constructors
    //Methods
    constructor(nameParam, healthParam){
        this.name = nameParam
        this.health = healthParam
        this.speed = 3
        this.strength = 3
    }
    // Methods
    sayName(){
        console.log(this.name)
    }
    showStats = () => {
        console.log(this.name)
        console.log(this.health)
        console.log(this.speed)
        console.log(this.strength)
    }
    drinkSake(){
        this.health += 10
    }
}

class Sensei extends Ninja{
    constructor(nameParam, healthParam){
        super(nameParam, healthParam);
        this.wisdom = 10
    }
    speakWisdom(){
        console.log(this.wisdom)

    }

}


// instantiate ninja objects
const ninja1 = new Ninja("edward", 80)
// console.log(ninja1.speed)
// ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()
ninja1.drinkSake()
ninja1.drinkSake()
ninja1.drinkSake()
ninja1.drinkSake()
ninja1.drinkSake()
ninja1.showStats()

// def __init__(self) -> constructor