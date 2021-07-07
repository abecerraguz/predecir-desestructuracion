const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
//console.log(name);
console.log(otherName);

/*
La salida es :
console.log(name); log--> ReferenceError: name is not defined
console.log(otherName); log--> Elon
*/
