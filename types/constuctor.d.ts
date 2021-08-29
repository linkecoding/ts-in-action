interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick(): void;
}
declare function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface;
declare class DigitalClock implements ClockInterface {
    constructor(h: number, m: number);
    tick(): void;
}
declare class AnalogClock implements ClockInterface {
    constructor(h: number, m: number);
    tick(): void;
}
declare let list1: Array<string>;
declare let list2: Array<string>;
//# sourceMappingURL=constuctor.d.ts.map