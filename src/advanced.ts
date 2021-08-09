let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: '4'
}

function getValues(obj: any, keys: string[]){
    return keys.map(key => obj[key])
}

console.log(getValues(obj, ['a']))
console.log(getValues(obj, ['d']))

// 抽取一个对象所有的key作为联合类型
// keyof T

interface Obj{
    a: number,
    b: string
}

type NewType = keyof Obj
let key: NewType = 'b';
console.log(typeof key)

// 索引访问操作符
// T[K]
let value: Obj['a'] = 1
console.log('value = ', value)

let c = obj['a']
console.log('c = ', c)
// T extends U

type K = keyof Obj;
type Val = Obj[K]

function getValues2<T, K extends keyof T>(obj: T, keys: K[]): T[K][]{
    return keys.map(key => obj[key])
}

console.log(getValues2(obj, ['a', 'b', 'd']))

let sample: ('a' | 'b' | 'c')[] = ['a', 'a']

interface MapObj{
    a: string,
    b: number,
    c: boolean
}

type ReadonlyObj = Readonly<MapObj>
const val1: ReadonlyObj = {
    a: 'a',
    b: 2,
    c: false
}

type OptionalObj = Partial<MapObj>
type PickObj = Pick<Obj, 'a' | 'b'>
type RecordObj = Record<'x' | 'y', MapObj>
const val2: RecordObj = {
    x: {
        a: 'a',
        b: 3,
        c: false
    },
    y:{
        a: 'a',
        b: 3,
        c: false
    }

}
