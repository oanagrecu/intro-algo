
 const prompt = require('prompt-sync')({sigint:true});

// const readline = require('readline');
// let rl = readline.createInterface(process.stdin, process.stdout);

// I - calculate

// Write an algorithm which calculates: the sum of two chosen number:
// 1. start
// 2. read the first variable
// 3. read the second variable
// 4. calculate their sum
// 5. return  the sum
// 6. end

var a = Number(prompt("Write a number:"));
var b = Number(prompt("Write a number:"));
const sum =  a + b;
console.log(`The result is: ${sum}`);

//THE NODE.JS VERSION

// rl.question("Choose a number: ", (num1) => {
// rl.question("Choose a number: ", (num2) => {
//     var sum = Number(num1)+ Number(num2);
//     console.log(`The sum of ${num1} and ${num2} is ${sum}`);
//  rl.close()
// });
// });


// let num1 = 10;
// let num2 = 9;
// console.log(num1 + num2);


// function sum(a,b){
//     return a + b;
// }
// console.log(sum(2,5));


// Write an algorithm which calculates: the division of two chosen number:

// 1. start
// 2. read the first number
// 3. read the second number
// 4. calculate the division
// 5.print the Result
// 6. end

// let c = 10;
// let d = 2;
// console.log(c/d);

// function division(num2, num3){
//     return num2/num3;
// }
// console.log(division(10,5));

//     rl.question("Choose a number:", (num3) => {
//     rl.question("Choose a second number", (num4) => {
//         var division = Number(num3) / Number(num4);
//            console.log(`The result is : ${division}`);
//     rl.close()
// });
// });
var c = Number(prompt("Write a number:"));
var d = Number(prompt("Write a number:"));
const division =  c / d;
console.log(`The result is: ${division}`);

// Write an algorithm which calculates: the modulo of two inputed numbers

// 1. start
// 2. read the first number
// 3. read the second number
// 4. calculate the modulo
// 5.print the Result
// 6. end
var e = Number(prompt("Write a number:"));
var f = Number(prompt("Write a number:"));
const modulo =  e % f;
console.log(`The result is: ${modulo}`);

// let e = 10;
// let f = 6; 
// console.log(e % f);

    //     rl.question("Write a number", (num5) => {
    //     rl.question("Write a number", (num6) => {
    //        var modulo = num5 % num6;
    //          console.log(`The  result is: ${modulo}`);
    //         rl.close()
    //        });
    //     });

// II - concatenate sentence
// Write an algorithm which concatenates two phrases together.
// 1. start
// 2. read the first phrase
// 3. read the second phrase
// 4. concatenate the two phrases
// 5.print the Result
// 6. end
function concatenatePhrases(){
 let  names = "BeCode";
let greet = "Hello";
const greetNames = greet + " " + names ;
console.log(greetNames);
}
concatenatePhrases();
// III - VAT
// Write an algorithm which receives a price without VAT and returns the price with VAT with a rate of 21%.
// 1. start
// 2. calculate the Vat
// 4. calculate the price with vat
// 5.print the Result
// 6. end

function CalculateVat (){
    var price = Number(prompt("Write the price of the article without VAT:"));
    let vatValue = price * 0.21;
    let pricewithVat = price + vatValue;
   return pricewithVat;
}
console.log(CalculateVat());

// V - surface of a circle
// Write an algorithm which receives the radius of a circle and calculate its surface.(A = π r²)
// 1. start
// 2. calculate the surface
// 3.print the Result
// 4. end
function calculateRadius(){
    var radius = Number(prompt("Write the radius of the circle "));
    let surface = Math.PI * radius ** 2;
    return surface;
}
console.log(calculateRadius());

// V - conversion of time to seconds

// Write an algorithm which receives the time of day in three different numbers, the hour, the minutes and the seconds and returns the number of seconds since midnight.
// totalSeconds = (hour * 3600) + (minutes * 60) + seconds)
// 1. start
// 2. read the hour
// 3. read the minutes
// 4. calculate the seconds since midnight
// 4.the Result
// 5. end

function getSeconds (){
    var hour = Number(prompt("Write the hour:"));
    var minutes = Number(prompt("Write the minutes:"));
    var seconds = Number(prompt("Write the seconds:"))
const totalSeconds = (hour * 3600) + (minutes * 60) + seconds;

 return("Number of seconds since midnight: " + totalSeconds);
}
console.log(getSeconds());