const sum = (num1, num2) => {
  return num1 + num2;
}

const multiply = (num1, num2) => {
  let product = num1 * num2;
  return product;
}

const divide = (num1, num2) => num1 / num2;

function square(num) {
  var squared = num * num;
  return squared;
}

module.exports = {
  sum, multiply, divide, square
}
