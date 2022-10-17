// clouser one scope

// var i = 10;

// function show() {
//   var j = 20;
//   console.log(j);
//   console.log(i);
// }
// show();
// ==============
// function show() {
//   let j = "j  a local variable of outer function";
//   //   console.log(j);
//   function innerfun() {
//     let k = "k a local variable of inner function";
//     console.log(k);
//     console.log(j);
//   }
//   innerfun();
// }
// show();
// ======================================
//  lexical scoping
// const outerfun = (a) => {
//   let b = 10;
//   const innerfun = () => {
//     let sum = a + b;
//     console.log(`the sum of two no is ${sum}.`);
//   };
//   innerfun();
// };
// outerfun(5);
// =========================
const outerfun = (a) => {
  let b = 10;
  const innerfun = () => {
    let sum = a + b;
    console.log(`the sum of two no is ${sum}.`);
  };
  return innerfun;
};
let inner = outerfun(5);
console.dir(inner);

inner();
