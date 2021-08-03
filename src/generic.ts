function log<T extends Length>(value: T): T {
    console.log(value);
    return value;
}

log<string[]>(['a', 'b']);

// type Log = <T>(value: T) => T;
// let myLog: Log = log;

interface Log<T = string> {
    (value: T): T;
}
// let myLog: Log<number> = log
// myLog(1)

class LogCls<T>{
    run(val: T){
        console.log(val);
        return val;
    }
}

let log1 = new LogCls<string>();
log1.run("a1");
interface Length{
    length: number;
}
