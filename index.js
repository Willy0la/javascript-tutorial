// // write a program that determines whether a given number is positive or negative


// number = prompt("This number is", "");

// // if(number > 0){
// //     alert("Positive")
// // }else{
// //     alert("negative")
// // }

// let x = (number > 0) ? "Positive":"Negative" 


// // write a program that check if a number is odd or even

// number = prompt("This number is", "")
// message= "";

// if(number % 2 == 0){

// message = "Even Number"

// }else{
//     message = "Odd Number"
// }

// console.log(message)


// // write a programm to determine the greater of two numbers

// let a =  prompt("First number", "")//higher
// let b = prompt("Second number", "")//lesser value
// result = "";

// if( a > b){

//     result = "Greater Than"
// }else{
//     result = "Lesser than"
// }

// console.log(result)


// // write a program that transforms a numerical grade to a letter Grade

// 90 - 1000
// 80 -89


// grade = prompt("Grade is","")
// result = "";

// if(grade >= 90){

//     result = "A";

// }else if(grade >= 80 ){
//     result = "B";

// }else if(grade >= 70){

//     result = "C"

// }else if (grade >= 60){

//     result = "D"

// }else {
//     result = "F"
// }

// console.log(result)

// // write a program that calculate ticket price

// let age  = prompt("Your age", "")
// let result = ""

// if(age>=60){
//     result = 15
// }else if(age >19){
//     result = 20;
    
// }else if(age>15){
//         result = 10
//     }else{
//         result = 5
//     }



// console.log(result)

// //years that are leap year

// let year = prompt("A leap Year")
// result = ""

// if(year%4 == 0){
//     result = "This is a leap year"
// }else{
//     result = "Not a leap year"
// }
// console.log(result)

// let price = prompt("Input Price", "")
// result = ""
// if(price >= 100){
//     result = 20
// }else if(price >=50){
//     result = 10
// }else{
//     result = 0
// }

// console.log(`You will receive ${result}% discount`)


// age = prompt("Input your age")
// result = ""

// if(age > 60){
//    result = "Senior"
// }else if(age >= 20){
//     result = "Adult"
// }else if(age >= 13){
//     result = "Teenager"
// }else{
// result = "Child"
// }
// console.log(result)


// let a = prompt("First Number")
// let operator = prompt("Operators")
// let b = prompt("Second Number")


// a = parseInt(a)
// b = parseInt(b)

// if(operator == "+"){

//     result = a+b

// }else if(operator == "-"){

//     result = a-b

// }else if(operator == "*"){
//     result = a-b
// }else if (operator == "/"){
//     if(b == 0){
//         result = "Use a number from 1 to 9"
//     }else{
//         result = a/b
//     }
// }else{
//     result = "Input an Operator"
// }

// console.log(result)



// //password validation


// let password = prompt("Input Password", "")

// password = password.length

// if (password >= 8){
//     result = "Password is Valid"
// }else{
//     result = "Password is Invalid"
// }

// console.log(result)





// let a = 30
// result =""
// a = Number(a)

// if(a%3==0 && a%5 == 0){
//     result = "Divisible by both numbers"

// }else if(a % 3 == 0 && a%5 !== 0 ){

//     result = "Only divisible by 3"

// }else if(a % 3 !== 0 && a%5 == 0){

//    result = "Divisible by only 5" 
// }else{
//     result= "Not divisible by any"
// }


// // console.log(result)
// let i =10 
// for (; i>0; i-=2){
//     console.log(i)
// }
// console.log("Happy Christmas")


// for(let i = 0 ; i<=10; i+=2){
//     console.log(i)
// }

// for(let p = 0; p <=10; p++ ){
//     if(p%2 == 0){
//         console.log(p)
//     }
// }
// let i =0;
// while(i<3){
// console.log(i);
// i++
// }


// let a = prompt("Enter the first number:");
// let operator = prompt("Enter the operator (+, -, *, /):");
// let b = prompt("Enter the second number:");
// switch (operator) {
// case "+":
//     result  = a+b;
    
//     break;

// case "-":
//     result = a-b;
//     break

// case "*":
//     result = a*b;
//     break
// case "/":
//    if(b==0){
//     result = "This number cannot be divided by zero"
//    }else{
//     result = a/b
//    }


// default:
//     result = "Invalid operator"
//     break;
// }



// Function to determine if a number is positive or negative
function checkPositiveNegative(number) {
    return (number > 0) ? "Positive" : "Negative";
}

// Function to check if a number is even or odd
function checkEvenOdd(number) {
    return (number % 2 === 0) ? "Even Number" : "Odd Number";
}

// Function to determine the greater of two numbers
function compareNumbers(a, b) {
    if (a > b) {
        return "Greater Than";
    } else if (a < b) {
        return "Lesser Than";
    } else {
        return "Both numbers are equal";
    }
}

// Function to transform a numerical grade to a letter grade
function convertGrade(grade) {
    if (grade >= 90) {
        return "A";
    } else if (grade >= 80) {
        return "B";
    } else if (grade >= 70) {
        return "C";
    } else if (grade >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Function to calculate ticket price based on age
function calculateTicketPrice(age) {
    if (age >= 60) {
        return 15;
    } else if (age > 19) {
        return 20;
    } else if (age > 15) {
        return 10;
    } else {
        return 5;
    }
}

// Function to check if a year is a leap year
function checkLeapYear(year) {
    return (year % 4 === 0) ? "This is a leap year" : "Not a leap year";
}

// Function to calculate discount based on price
function calculateDiscount(price) {
    if (price >= 100) {
        return 20;
    } else if (price >= 50) {
        return 10;
    } else {
        return 0;
    }
}

// Function to categorize by age
function categorizeAge(age) {
    if (age > 60) {
        return "Senior";
    } else if (age >= 20) {
        return "Adult";
    } else if (age >= 13) {
        return "Teenager";
    } else {
        return "Child";
    }
}

// Function for a basic calculator (addition, subtraction, multiplication, division)
function basicCalculator(a, operator, b) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return (b === 0) ? "Cannot divide by zero" : a / b;
        default:
            return "Invalid operator";
    }
}

// Function to validate password length
function validatePassword(password) {
    return (password.length >= 8) ? "Password is valid" : "Password is invalid";
}

// Function to check divisibility by 3 and 5
function checkDivisibility(a) {
    if (a % 3 === 0 && a % 5 === 0) {
        return "Divisible by both numbers";
    } else if (a % 3 === 0) {
        return "Only divisible by 3";
    } else if (a % 5 === 0) {
        return "Divisible by only 5";
    } else {
        return "Not divisible by either 3 or 5";
    }
}

// Loop example: Countdown from 10
function countdown() {
    let i = 10;
    while (i > 0) {
        console.log(i);
        i--;
    }
    console.log("Happy Christmas");
}

// Loop example: Print even numbers from 0 to 10
function printEvenNumbers() {
    for (let i = 0; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

// Loop example: Print numbers from 0 to 10 (inclusive) with step of 2
function printNumbersWithStep() {
    for (let i = 0; i <= 10; i += 2) {
        console.log(i);
    }
}

// Loop example: Use while loop to count to 3
function countToThree() {
    let i = 0;
    while (i < 3) {
        console.log(i);
        i++;
    }
}

function calculate(){
    let a = prompt("Enter the first number:");
    let operator = prompt("Enter the operator (+, -, *, /):");
    let b = prompt("Enter the second number:");
    switch (operator) {
    case "+":
        result  = a+b;
        
        break;

    case "-":
        result = a-b;
        break

    case "*":
        result = a*b;
        break
    case "/":
       if(b==0){
        result = "This number cannot be divided by zero"
       }else{
        result = a/b
       }


    default:
        result = "Invalid operator"
        break;
}
}
console.log(result)