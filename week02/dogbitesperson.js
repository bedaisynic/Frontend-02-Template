class Dog {
    bite(person) {
        person.getHurt();
    }
}

class Person {
    constructor(HP) {
        this.HP = HP;
    }
    getHurt() {
        this.HP--;
        console.log('OUCH!! HP = ' + this.HP);
    }
}

var dog = new Dog();
var person = new Person(100);

dog.bite(person);