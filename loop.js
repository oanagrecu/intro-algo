const prompt = require('prompt-sync')({sigint:true});

// const readline = require('readline');
// let rl = readline.createInterface(process.stdin, process.stdout);


// Write an algorithms which receives an integers n and prints:

// the numbers from 1 to n
function numbersFrom1ToN(){
var number1 = Number(prompt("Please write a number:"));

for (counter = 1; counter <= number1; counter++ ){

    console.log(`${counter}`);
}}
numbersFrom1ToN();
// // the numbers from 1 to n in descending order

 var number2 = Number(prompt("Please write a number:"));
for (counter1 = number2; counter1 > 0; counter1--){
    console.log("The numbers are:" + `${counter1}`);
}

// the numbers from -n to n

var num8 = Number(prompt("Please enter a number:"));
//  var counter8 = -num8;
 for (let counter8 = -num8; counter8 <= num8; counter8++){
console.log(counter8);
 }

// the odd numbers from 1 to n
var number1 = Number(prompt("Please write a number:"));

for (counter = 1; counter <= number1; counter++ ){
if(counter%2 == 1){
    console.log(`${counter}`);
}
}
// II - print random number of integers

// // Write an algorithm which receives an random integer and prints from 0 to it.
var number4 = Number(prompt("Please write a number:"));

for (counter3 = 0; counter3 <= number4; counter3++ ){
    console.log(`${counter3}`);
}
// III - throw dices
// Write an algorithm which throws a dice a given number of time and count the number of time a certain number is received.
function throwDices(throws,numberWanted){
 throws = Number(prompt("write a number of throws:"));
 numberWanted = Number(prompt("Write the hunted number from 1 to 6:"));
let count = 0;
for (let i = 0; i<= throws; i++){
    const dice  = Math.floor(Math.random()*6)+1;
if(dice === numberWanted){
    count++;
}
}
return count;
}
console.log(throwDices());
// IV - even numbers
// Write an algorithm which prints all the even numbers from 0 to a given number.

var number1 = Number(prompt("Please write a number to discover the even numbers:"));

for (counter = 0; counter <= number1; counter++ ){

if(counter%2 == 0 && counter!==0){
    console.log(`${counter}`);
}
}

// V - perfect number
// Write an algorithm which verify if a given positive integer is a perfect number, meaning equal to the sum of his divisors (except himself).


function isPerfectNumber(){
    var number9 = Number(prompt("Write a perfect number:"));
        // Step 1: Find the factors
        let factors = 0;
        for (let i = 1; i < number9; i++) {
          if (number9 % i === 0) {
        factors = factors+i;
          }
        }
        return factors === number9;
    }
    console.log(isPerfectNumber());