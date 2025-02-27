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

//2 arrow function
const sum = function sum(a, b) {
    return a + b
}

const arrowSum = (a, b) => a + b

console.log(sum(5,5))
console.log(arrowSum(5,5))

const greeting = (name) => {
    if(name) {
        return 'Olá' + name + "!"
    }else {
        return "olá"
    }
}

console.log(greeting(" Matheus"))
console.log(greeting())

const testArrow = () => console.log("testou!")

testArrow()

const user = {
    name: 'Theo',
    sayUserName() {
        var self = this
        setTimeout(function() {
            console.log(self)
            console.log('Username' + self.name)
        },500)
    },
    sayUserNameArrow() {
        setInterval(() => {
            console.log(this)
            console.log('Username ' + this.name)
        },700)
    }
}




