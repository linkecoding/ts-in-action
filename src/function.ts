function add(x: number, ...rest: number[]){
    return x + rest.reduce((pre, cur) => pre + cur)
}

console.log(add(1, 2, 3))

function add2(...rest: any[]): any{
    const first = rest[0];
    if(typeof first === 'string'){
        return rest.join(' ');
    }else if(typeof first === 'number'){
        return rest.reduce((pre, cur) => pre + cur)
    }    
}

console.log(add2(1, 2, 3))
console.log(add2('1', '2', '3'))