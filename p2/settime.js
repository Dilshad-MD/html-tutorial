// let a = setTimeout(function () {
//   alert("I am inside of settimeout");
//   // console.log("hello");
// }, 5000);

// console.log(a);
// ================
// document.write("dilshad");

// let c = setTimeout(function () {
//   alert("I am inside of settimeout");
// }, 5000);
// let d = prompt("do you want to settimeout?");
// if ("no" == d) {
//   clearTimeout(c);
// }
// console.log(c);
// =====================
// document.write("dilshad");

// const sum = (a, b, c) => {
//   console.log("yes I am running " + (a + b + c));
// };
// setTimeout(sum, 1000, 1, 2, 7);
// =======================================
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 1; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 2000 * i);
// }
// console.log(arr);
let a = setInterval(function () {
  alert("setInterval");
}, 3000);
clearInterval(a);
