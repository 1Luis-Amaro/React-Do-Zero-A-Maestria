//1 - var, let e const 
// usando o let e const minha variavel não vaza, se eu uso o var em um if ele muda tanto no bloco como a propria variavel, isso no let e const n acontece

var x = 10
var y = 15

if(y > 10) {
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if(b > 10) {
    let a = 5
    console.log(a)
}

console.log(a)


let i = 1000
for(let i=0; i < 5; i++){
    console.log(i)
}

console.log(i)

