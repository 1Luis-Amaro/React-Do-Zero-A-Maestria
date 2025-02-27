// //1 - var, let e const
// // usando o let e const minha variavel não vaza, se eu uso o var em um if ele muda tanto no bloco como a propria variavel, isso no let e const n acontece

// var x = 10;
// var y = 15;

// if (y > 10) {
//   var x = 5;
//   console.log(x);
// }

// console.log(x);

// let a = 10;
// let b = 15;

// if (b > 10) {
//   let a = 5;
//   console.log(a);
// }

// console.log(a);

// let i = 1000;
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log(i);

// //2 arrow function
// const sum = function sum(a, b) {
//   return a + b;
// };

// const arrowSum = (a, b) => a + b;

// console.log(sum(5, 5));
// console.log(arrowSum(5, 5));

// const greeting = (name) => {
//   if (name) {
//     return "Olá" + name + "!";
//   } else {
//     return "olá";
//   }
// };

// console.log(greeting(" Matheus"));
// console.log(greeting());

// const testArrow = () => console.log("testou!");

// testArrow();

// const user = {
//   name: "Theo",
//   sayUserName() {
//     var self = this;
//     setTimeout(function () {
//       console.log(self);
//       console.log("Username" + self.name);
//     }, 500);
//   },
//   sayUserNameArrow() {
//     setInterval(() => {
//       console.log(this);
//       console.log("Username " + this.name);
//     }, 700);
//   },
// };
// //sayUserName()
// //sayUserNameArrow()

// //3 filter -> não muda o array
// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// const highNumbers = arr.filter((n) => {
//   if (n >= 3) {
//     return n;
//   }
// });

// console.log(highNumbers);

// const users = [
//   { name: "Matheus", available: false },
//   { name: "Pedro", available: true },
//   { name: "João", available: false },
//   { name: "Carlos", available: true },
// ];

// const userAvailable = users.filter((user) => {
//   return user.available;
// });

// const userNotAvailable = users.filter((user) => !user.available);

// console.log(userAvailable);
// console.log(userNotAvailable);

//4 Map -> ai já modificamos os dados dos array  e posso implementar algo também enquando passo pelos itens

const products = [
  { name: "Camisa", price: 10.99, category: "Roupas" },
  { name: "Chaleira Elétrica", price: 49.99, category: "Eletro" },
  { name: "Fogão", price: 400, category: "Eletro" },
  { name: "Calça jeans", price: 50.99, category: "Roupas" },
];

products.map((product) => {
  if (product.category === "Roupas") {
    product.onSale = true;
  }
});

console.log(products);
