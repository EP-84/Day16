class Pets {
constructor (name, legs) {
this.name = name;
this.legs = legs;
}
walk(numberOgLegs) {
console.log('${this.name} is walking on ${this._legs}');
}
}
class Dog extends Pets 

bark() {
let dogSay = "Pujdo says WUF-WUF";
return dogSay;
}

let dog = new Dog(names, legs);
console.log(dog.walk());
console.log(dog.bark());

module.exports = {
    Pets,
    Dog

}