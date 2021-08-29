declare class Dog {
    private readonly name;
    static food: string;
    constructor(name: string);
    run(): void;
}
declare class Husky extends Dog {
    color: string;
    constructor(name: string, color: string);
    sample(): void;
}
declare let dog: Dog;
declare abstract class Animal {
    eat(): void;
    abstract sleep(): void;
}
declare class Cat extends Animal {
    sleep(): void;
}
declare class Rabbit extends Animal {
    sleep(): void;
}
declare let animals: Animal[];
declare class WorkFlow {
    sleep1(): this;
    sleep2(): this;
}
declare class MyFlow extends WorkFlow {
    constructor();
}
declare class Auto {
    state: number;
}
interface AutoInterface extends Auto {
}
declare class C implements AutoInterface {
    state: number;
}
declare class IA {
}
declare class Sample implements IA {
    sampleName: any;
    sample(): void;
}
declare class Demo implements IA {
    demoName: any;
    demo(): void;
}
declare let num: number;
declare const instance: Sample | Demo;
declare function isSample(instance: Sample | Demo): instance is Sample;
//# sourceMappingURL=class.d.ts.map