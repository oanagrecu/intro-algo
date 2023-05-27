// I. print an array
// Write an algorithm which prints everything in an array.
function printArray(arr){
for (let i = 0; i < arr.length; i++){
console.log(arr[i]);
}}
let arr1 = [44,67,34,56,1,9];
printArray(arr1);
// II - maximum
// Write an algorithm which receives an array of integers and prints its maximum.
function printTheMaximumOfArray(arr){
    let max = arr[0];
for (let i = 0; i < arr.length; i++){

if(arr[i]>max){
    max = arr[i];
}
}
console.log("The maximum value is:", max);
}
const array3 = [57,89,23,45,61,];
printTheMaximumOfArray(array3);


// III - minimum
// Write an algorithm which receives an array of integers and prints its minimum.
function printMinimumOfArray(arr){
    let min = arr[0];
    for(let i= 1; i<arr.length; i++){
        if(arr[i]< min){
            min = arr[i];
        }
    }
    console.log(`The minimum value is : ${min}`);
}
const array4 = [34,56,2,98,100];
printMinimumOfArray(array4);

// IV - minimum position
// Write an algorithm which receives an array of integers and prints the position of its minimum.
function printThePositionOfMinimum(arr) {
    let minimum = arr[0];
    let positionMinimum = 0;
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < minimum) {
        minimum = arr[i];
        positionMinimum = i;
      }
    }
  
    console.log(`The minimum value ${minimum} is at position: ${positionMinimum}`);
  }
const array5 = [45,67,23,2,89,54];
printThePositionOfMinimum(array5);

// V - ordered array
// Write a algorithm which receives an array of integers and check if its ordered ascendantly. Print true if the array is ordered, false if it’s not.
function arrayOrderedAscending(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false;
      }
    }
    return true;
  }
  const array6 =[23,56,24,78,2,9]; //[2,9,23,24,56,78]
  console.log(arrayOrderedAscending(array6));
  const array7 =[2,9,23,24,56,78];
  console.log(arrayOrderedAscending(array7));
  