console.dir(this);

//js objects have properties and methods
//just like object irl have characteristics and things they can do
//obj literal notation
var myCar = {
// key - value pairs
make: 'hyndai',
model: 'kona',
color: 'green',
displayStats: function () {
    console.log(this.make,this.color,this.model)
}

}

myCar['color'] = 'blue';
//getting values using bracket notation
console.log(myCar['color']);

//setting values using dot notation
myCar.color = 'purple'
console.log(myCar.color)

myCar.displayStats();

function disappear(element){
    element.remove();

}
function status(element){
    console.log(element)
}
