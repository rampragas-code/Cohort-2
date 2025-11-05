// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”
function password3Attempt() {
    // Password with 3 attempts check
let sahipassword = "ram";
let userpassword = prompt("Enter the password to access the site:");
let counter = 1;
while (sahipassword !== userpassword) {
    
    if (counter === 3) {
        alert("Too many incorrect attempts. Access denied.");
        break;
    } 
    
    userpassword = prompt("Incorrect password. Please try again:");
    counter++;
    
}
if (sahipassword === userpassword) {
alert("Access granted. Welcome to the site!");
}
}

// ask usser for word until they type stop and also count number of attempts and yes answers
// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".
function wordCollector() {
let userword = prompt("Give me a word ")
 let counter = 1;
 let yes_counter = 0;
while(userword !== "stop"){
    if(userword === "yes"){
        yes_counter++;
    }
    userword = prompt("Give me a word ")
    counter++;
}
alert(`You entered " + ${counter} + " words, of which " + "yes_counter were "+   ${yes_counter}.`);
}


// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

function divisibleBy7() {

for(let i = 1; i <= 50; i++){
if(i % 7 === 0){
    console.log(i);
}
}
}


// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

function sumOfOddNumbers() {
let sum = 0;
for(let i = 1; i <= 30; i++){
    if(i % 2 !== 0){
        sum += i;
    }
}
console.log(`Sum of odd numbers from 1 to 30 is:  + ${sum}`);

}



// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

function askUntilEven() {
let usernumber = parseInt(prompt("Enter a number:"));
while(usernumber % 2 !== 0){
    usernumber = parseInt(prompt("That's odd! Please enter an even number:"));

}
if(usernumber % 2 === 0){
    alert(`Thank you for entering ${usernumber} an even number!`);
}
}


// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

function printBetweenInputs() {
let start = parseInt(prompt("Enter the start number:"));
let end = parseInt(prompt("Enter the end number:"));
if(start > end){
    alert("Start number should be less than or equal to end number.");
}
for(let i = start; i <= end; i++){
    console.log(i);
}
}

// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

function firstThreeOddNumbers() {
let count = 0;
for(let i = 1; i <= 20; i++){
    if(count === 3) break;
    if(i % 2 !== 0){
        console.log(i);
        count++;
    }
}
}


// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.
function countPositiveNumbers() {
let positiveCount = 0;
for(let i = 1; i <= 5; i++){
    let usernumber = parseInt(prompt("Enter a number "));
    console.log(usernumber)
    if(usernumber > 0){

        positiveCount++;
    }
}
alert(`You entered ${positiveCount} positive numbers.`);
}


// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

function atmSimulator() {
let balance = 1000;
for(let i = 1; i <= 3; i++){
    let withdrawalAmount = parseInt(prompt(`Your balance is ₹${balance}. Enter withdrawal amount:`));
    if(withdrawalAmount <= balance){
    balance -= withdrawalAmount;
    }
    else{
        alert("Insufficient balance.");
    }

}
}
atmSimulator();