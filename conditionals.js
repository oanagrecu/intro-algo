
// const readline = require('readline');

// // let rl = readline.createInterface(process.stdin, process.stdout);

// // rl.question('What is your age? ', (age) => {
// //     console.log('Your age is: ' + age);
// //     rl.question("Which is the chosen number?", (nbr) => {
// //         console.log('Your age is: ' + nbr);

// //         rl.close()
// //     })
// // });

const prompt = require('prompt-sync')({sigint:true});

// // I - cinema tariffs
// // In a cinema the full tariff is 10 €, the reduced one is 8 €. Write an algorithm which given a boolean indicating if the person can have a reduced tariff 
// // prints the price to pay.
// //  Start
// // 2. Read the boolean indicating if the person can have a reduced tariff 
// // 3. If isReduced is true, set the price to 8
// // 4. If isReduced is false, set the price to 10
// // 5. Display the price to pay
// // 6. Stop

var isReaduced = true;
if (isReaduced === true){
    price = 8 +" $" ;
}
else {
      price = 10 +" $";
}
console.log(`The price to pay is ${price}`);

// // II - maximum
// // Write an algorithm which given 3 numbers finds the maximum.
// // 1. Start
// // 2. Read the first number 
// // 3. Read the second number 
// // 4. Read the third number 
// // 5. Set the maximum variable as the first number (maximum = num1)
// // 6. If the second number (num2) is greater than the current maximum, maximum is num2
// // 7. If the third number (num3) is greater than the current maximum, maximum is num3
// // 8. print  the maximum value
// // 9. Stop
// // 3. Write an algorithm whit given 3 numbers finds the maximum.

function getMaxNumber(){
var num1 = Number(prompt("Write a number: "));
var num2 = Number(prompt("Write a number: "));
var num3 = Number(prompt("Write a number: "));
let maxNum = num1;
if(num2 > maxNum){
    maxNum =  num2;
}
if(num3 > maxNum){
    maxNum = num3;
}
if(num1 == num2 && num1 == num3){
    console.log("Write three different numbers");
}
console.log(maxNum);
}
getMaxNumber();
// // II - identical dice
// // Write an algorithm which throws 3 dices and finds out the number of identical value, three, two or none.
// // Start
// // 2.  first dice a random number  between 1 and 6
// // 3.  second dice a random number  between 1 and 6
// // 4.  third dice a random number  between 1 and 6
// // 5. If dice1, dice2, and dice3 are all equal, display "Three identical values"
// // 6. Otherwise, if dice1 and dice2 are equal or dice2 and dice3 are equal or dice1 and dice3 are equal, display "Two identical values"
// // 7. Otherwise, display "None of the values are identical"
// // 8. Stop

function throwTheDices(){
const dice1 = Math.floor(Math.random()*6)+1;
console.log(dice1);
const dice2 = Math.floor(Math.random()*6)+1;
console.log(dice2);
const dice3 = Math.floor(Math.random()*6)+1;
console.log(dice3);

if(dice1 === dice2 === dice3){
    console.log("Three identical values");
}
else if(dice1 === dice2 || dice2 === dice3 || dice3 === dice1){
    console.log("Two identical values");
}
else {
console.log( "None of the values are identical");
}
}
throwTheDices();

// // IV - day’s number
// // Write an algorithm which given the number of a day returns its name.
// //1.start
// //2. for every day of the week give it a number
// //3.for every number set the name of the day of the week
// //4. display the name coresponding to the chosen number
// //5. stop 



// function writeTheDay(){
//     let day = Number(prompt("Enter a number for a day of the week:"));
// if (day == 1){
//     return "Today is Monday";

// }
// else if(day == 2){
//     return "Today is Tuesday";
// }
// else if (day == 3){
//     return  "Today is Wednesday";
// }
// else if (day == 4){
//     return "Today is Thursday";
// }
// else if(day == 5){
//     return "Today is Friday";
// }
// else if(day == 6){
//     return "Today is Saturday";
// }
// else if ( day == 7){
//     return "Today is Sunday";
// }
// else{
//     return "Write a number between 1 and 7";
// }
// }
// writeTheDay();
function evaluateTheDay() {
    var dayNumber = Number(prompt("Enter a number between 1 and 7:  "));
    
    switch (dayNumber) {
      case 1:
        console.log("Today is Monday");
        break;
      case 2:
        console.log("Today is Tuesday");
        break;
      case 3:
        console.log("Today is Wednesday");
        break;
      case 4:
        console.log("Today is Thursday");
        break;
      case 5:
        console.log("Today is Friday");
        break;
      case 6:
        console.log("Today is Saturday");
        break;
        case 7:
        console.log("Today is Sunday");
        break;
        default:
        console.log("write a number between 1 and 7:  ");
        break;
    }
  }
  
  evaluateTheDay();


// // V - print shop
// // A print shop charges 0.12 € the ten first copy, 0.11 € the next 20 and 0.10 € from there. Write an algorithm which given a number of copies and calculates the price.

// //
// const numOfcopies = Number(prompt("Enter the number of copies:"));

function calculateThePrice(){
    let numOfcopies = Number(prompt("Enter the number of copies:"));
    let totalPrice = 0;

    if(numOfcopies <= 10 ){
   totalPrice = 0.12 * numOfcopies;
    }

    else if (numOfcopies <= 30){
       totalPrice = (10 * .12) + (numOfcopies - 10) * .11
    //    console.log(numOfcopies);
    }
    else { 
         totalPrice = 10 * 0.12 + 20*0.11 +(numOfcopies - 30)* 0.10;
    }
console.log(totalPrice.toFixed(2));
}
 calculateThePrice();
