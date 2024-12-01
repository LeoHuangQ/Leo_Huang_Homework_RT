if(true){
    var v = "this is var";
}
console.log(v);

if(true){
    let l = "this is let";
}
console.log(l);


//
console.log(v)
var v = "true"
console.log(v)

console.log(l)
let l = "true"
console.log(l)

//hoisting for function key word , not const key word
function plus(a, b){
    return a + b;
}

const arrow_plus = (a, b) => a+b;

console.log(plus(1,2));
console.log(arrow_log(3,2));