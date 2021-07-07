const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);
/*
La salida es :
console.log(password); --> log 12345
console.log(hashedPassword) --> undefined;
*/