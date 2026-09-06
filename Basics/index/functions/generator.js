function * p(){
    yield 1;
    yield 2;
    yield 3;
}

let pid=p();

console.log('hi',pid.next().value);
console.log('hlo',pid.next().value);
console.log('hello',pid.next().value);
