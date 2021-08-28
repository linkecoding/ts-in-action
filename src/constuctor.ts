interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick(): void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let list1: Array<string> = ['1', '2', '3', '4'];
for (let index in list1) { 
    console.log('l1 ---- ', index);
}

let list2: Array<string> = ['1', '2', '3', '4'];
for (let index of list2) { 
    console.log('l2 ---- ', index);
}