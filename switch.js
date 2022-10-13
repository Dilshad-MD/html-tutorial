let num1 = 15;
let operator = "+";
let num2 = 17;

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;

  case "-":
    console.log(num1 - num2);
    break;

  case "*":
    console.log(num1 * num2);
    break;

  case "/":
    console.log(num1 / num2);
    break;

  case "%":
    console.log(num1 % num2);
    break;

  default:
    console.log(" invalid Operator");
}
