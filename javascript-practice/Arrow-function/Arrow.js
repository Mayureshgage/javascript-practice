// Arrow function
let sum = (a,b) => a + b; 
console.log(sum(10,20));

let firstName = fname => fname;
console.log(firstName('Tushar'))  //for arrow function when argumnet is one them parenthesis is not importamt

let doublenum = n => n * n;
console.log(doublenum(3));// Dynamic function

let age = () => prompt('your age ?',18);
let welcome = () => (age<18) ? console.log('you are teen') : console.log('you are an adult');
welcome();

//multiline arrow function

let addition = (a,b) => {
    result = a + b;
    return result;
}

console.log(`here is your result ${addition(7,7)}`);


// Task

let ask = (question,yes,no) => confirm(question) ? yes() : no();
ask('do you agree ?',
() => alert('you agreed'),
() => alert('you did not agree')
)