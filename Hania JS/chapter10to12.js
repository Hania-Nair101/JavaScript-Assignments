
// QUESTION 1

var city = prompt ("Enter your city")
if (city === "karachi" || city === "Karachi" || city === "KARACHI"  ){
    alert("Welcome to the city of lights!")
}

// QUESTION 2
var gender = prompt ("Enter your gender?")
if (gender === "male" ) {
    console.log ("Good morning Sir")
}
else if (gender === "female" ) {
    console.log ("Good morning Madam")
}

// QUESTION 3

var trafficSignals = prompt ("Signal Colors")
if (trafficSignals === "red" || trafficSignals === "RED")
    console.log ("Must stop")
else if (trafficSignals === "yellow" || trafficSignals === "YELLOW")
    console.log ("Ready to go")
else if (trafficSignals === "green" || trafficSignals === "GREEN")
    console.log ("Move now")
 else{
    console.log ("SORRY YOUR COLOR IS WRONG")
}
// QUESTION 4
var fuel = prompt ("How many fuel in your car?")
if (fuel < 0.25 ){
    console.log ("Refill your fuel")
}else{
    console.log("Drive Safely");
    
}

// QUESTION 5

var obtainMarks1 = +prompt("First Subject Marks out of 100")
var obtainMarks2 = +prompt("Secind Subject Marks out of 100")
var obtainMarks3 = +prompt("Third Subject Marks out of 100")

var obtainTotal = obtainMarks1+ obtainMarks2+ obtainMarks3
var percentage = (obtainTotal / 300 *100)
console.log("Total marks of all subjects are : " + obtainTotal + ". Percentage: " + (obtainTotal / 300 *100)+ " %");
if(obtainMarks1 <= 100 && obtainMarks2 <= 100 && obtainMarks3 <= 100 && obtainMarks1 >= 0 && obtainMarks2 >= 0 && obtainMarks3 >= 0){
    if(percentage >= 80 && percentage <= 100 ){
        console.log("You got A+ Grade")
    }else if( percentage < 80 && percentage >= 70 ){
        console.log("You got A Grade")
    }else if (percentage < 70 && percentage  >= 60){
        console.log("You got B Grade")
    }else if (percentage >50 && percentage < 60){
        console.log("You got C Grade")
    }else {
        console.log("You are FAIL!")
    }
}
else{
    console.log("Invalid Numbers")
}

// Question 7
var hiddenNum = 8
var secretNum = +prompt ("Guess the Secret Number 1 to 10")
if (secretNum === hiddenNum){
    console.log ("Bingo! Correct Answer")
}else if (secretNum == 7 || secretNum == 9){
    console.log ("You are so close")
}
else{
    console.log("Try again");
    
}

// Question 8

var divisible = +prompt ("Enter the number divisible by 3")
if(divisible % 3 ==  0){
    console.log("Divisible by 3")
}
else {
console.log("Not divisible by 3")

}

// Question 9

var odd = +prompt ("Check even or odd number")

if (odd % 2 == 0){
    console.log("It is an even number")
} else{
    console.log("Its an odd number")
}
  
// Question 10 

var weather = prompt("How's the weather")
if(weather > 40 ){
    console.log("It's too hot Outside")
}
else if(weather < 40 && weather >= 30 ){
    console.log("Today's weather is normal")
}
if(weather < 30 && weather >= 20 ){
    console.log("Today's weather is cool!")
}
if(weather < 20 && weather >= 10 ){
    console.log("OMG! Today's weather is too cool!")
}



// Question 11

var userNumber1 = +prompt ("First number")
var userNumber2 = +prompt ("Second number")
var operation = prompt ("Operation")

if(operation == "+"){
    console.log(userNumber1 + userNumber2)
}else if(operation == "*"){
    console.log(userNumber1 * userNumber2)
}
else if(operation == "-"){
    console.log(userNumber1 - userNumber2)
}
else if(operation == "/"){
    console.log(userNumber1  / userNumber2)
}
else if(operation == "%"){
    console.log(userNumber1 % userNumber2)
}
