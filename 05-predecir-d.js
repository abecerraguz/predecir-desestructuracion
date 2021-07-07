const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

/*
console.log(key) / log--> value
console.log(secondKey) / log--> [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]) / log--> 1
console.log(willThisWork) /  / log--> 5
*/
