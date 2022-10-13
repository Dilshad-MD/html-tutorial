// let arr = [12, 14, 13, 3, 2, 4];
// let i = 0;
// let sum = 0;

// //Print Even Number
// while (i < arr.length) {
//   if (arr[i] % 2 == 0) {
//     sum = sum + arr[i];
//   }
//   i++;
// }
// console.log(sum + "sum of even number ");

// //Print odd Number
// while (i < arr.length) {
//   if (arr[i] % 2 != 0) {
//     sum = sum + arr[i];
//   }
//   i++;
// }
// console.log(sum + "sum of odd number ");

// let arr = [8, 2, 3, 4, 5, 6];

// let avg = arr.reduce((accum, cuurVal, index, arr) => {
//   let total = (accum += cuurVal);
//   return total / arr.length;
// });

// console.log(avg);
// target
// let arr = [8, 2, 3, 4, 5, 6];
// let target = 4;

// let i = 0;
// while (i < arr.length) {
//   if (target === arr[i]) {
//     console.log("Target found", i, arr[i]);
//     break;
//   }
//   i++;
// }
// console.log(arr);
let arr = [10, 8, 2];
let sum = 0;
let i = 0;
while (sum < arr.length) {
  console.log((sum += arr[i]));
  sum = arr[i] + sum;
}
console.log("final sum " + sum);
console.log("avg is " + sum / arr.length);
