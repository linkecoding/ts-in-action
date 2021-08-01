class Dog {
    private readonly name: string

    static food: string = 'bones'

    constructor(name: string) {
        this.name = name;
    }

    run() { }
}

class Husky extends Dog {

    constructor(name: string, public color: string) {
        super(name)
        this.color = color
        Husky.food = 'Husky'
    }

    sample() {

    }
}

console.log(Dog.prototype)
let dog = new Dog('mifa')
console.log(dog)

console.log(Dog.food)
console.log(new Husky('xx', 'x'))
console.log(Husky.food)


abstract class Animal {
    eat() {
        console.log('eat')
    }

    abstract sleep(): void;
}

class Cat extends Animal {
    sleep() {
        console.log('Cat sleep')
    }
}

class Rabbit extends Animal {
    sleep() {
        console.log('Rabbit sleep');
    }
}

let animals: Animal[] = [new Cat(), new Rabbit()]
animals.forEach(ani => {
    ani.sleep();
})

class WorkFlow {
    sleep1() {
        return this;
    }

    sleep2() {
        return this;
    }
}

class MyFlow extends WorkFlow {
    constructor(){
        super()
        console.log("new")
    }
    // next() {
    //     return this;
    // }
}

class Auto{
    state = 1;
}

interface AutoInterface extends Auto{

}

class C implements AutoInterface{
    state = 1
}

interface IA{
    sample(): void
}

class Sample implements IA{
    sample(){

    }
}
// const flow = new MyFlow()
// flow.sleep1().sleep2().next();