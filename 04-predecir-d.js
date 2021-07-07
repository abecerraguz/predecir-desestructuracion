const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // 2
const [,,,second] = numbers; // 5
const [,,,,,,,,third] = numbers; // 2

console.log()
//Predict the output
console.log(first == second);
console.log(first == third);
/*
console.log(first == second) log --> false
console.log(first == third) log --> true
*/
