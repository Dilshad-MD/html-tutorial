// //  delete not method , delete a operators / lenght not effected delete operator
// // use delete operator not change lenght in this operator
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(num);

// delete num[0];

// console.log(num);

// ****** concat more than one *******

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19];
// 5;
// let num_even_more = [511, 512, 513, 514, 515, 516, 517, 518, 519];

// let newArray = num.concat(num_more, num_even_more);

// console.log(newArray);

// console.log(num, num_more);

// *****Sort method   orignal arr modify*****
//  alpha betic sort arr
// let num = [1, 22, 3, 44, 551, 16, 7, 8, 229];

// num.sort();
// console.log(num);

// *****compare function*****
//  acending a - b , decending  b - a
// let compare = (a, b) => {
//   return a - b;
// };
// let num = [1, 22, 3, 44, 551, 16, 7, 8, 229];

// num.sort(compare);

// // num.reverse();

// console.log(num);

//****Splice and Slice***** source arry modify
// return deleted items modify the arry
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// num.splice(2, 3, 1021, 1022, 1023);
// console.log(num);

// *****Slice***** orignal arr not modify , creat new arr

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newNum = num.slice(3);
let newNum = num.slice(3, 5);

console.log(newNum);
