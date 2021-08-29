declare let obj: {
    a: number;
    b: number;
    c: number;
    d: string;
};
declare function getValues(obj: any, keys: string[]): any[];
interface Obj {
    a: number;
    b: string;
}
declare type NewType = keyof Obj;
declare let key: NewType;
declare let value: Obj['a'];
declare let c: number;
declare type K = keyof Obj;
declare type Val = Obj[K];
declare function getValues2<T, K extends keyof T>(obj: T, keys: K[]): T[K][];
declare let sample: ('a' | 'b' | 'c')[];
interface MapObj {
    a: string;
    b: number;
    c: boolean;
}
declare type ReadonlyObj = Readonly<MapObj>;
declare const val1: ReadonlyObj;
declare type OptionalObj = Partial<MapObj>;
declare type PickObj = Pick<Obj, 'a' | 'b'>;
declare type RecordObj = Record<'x' | 'y', MapObj>;
declare const val2: RecordObj;
//# sourceMappingURL=advanced.d.ts.map