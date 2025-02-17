console.clear();

const add = require('./local-modules/add.js');

console.log("Hello from main.js");
const sum = add(1, 2);
console.log(sum);