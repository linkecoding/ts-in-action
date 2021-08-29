declare function log<T extends Length>(value: T): T;
interface Log<T = string> {
    (value: T): T;
}
declare class LogCls<T> {
    run(val: T): T;
}
declare let log1: LogCls<string>;
interface Length {
    length: number;
}
//# sourceMappingURL=generic.d.ts.map