

let outsourceFunction1 = require("./math-module.js");
let outsourceFunction2 = require("./string-module.js");


let sum = outsourceFunction1.sum(9,2);
console.log(`sum function 9 + 2 = ${sum}`);

let product = outsourceFunction1.multiply(3,4);
console.log(`multiply function 3 * 4 = ${product}`);

let divided = outsourceFunction1.divide(14,2);
console.log(`divide function 14 / 2 = ${divided}`);

let squared = outsourceFunction1.square(9);
console.log(`squared function 9 * 9 = ${squared}`);

let camelCaser = outsourceFunction2.camelCaser("c4q access code");
console.log(camelCaser);

let vovelRemover = outsourceFunction2.vovelRemover("c4q access code");
console.log(vovelRemover);

let reverser = outsourceFunction2.reverser("c4q access code");
console.log(reverser);
