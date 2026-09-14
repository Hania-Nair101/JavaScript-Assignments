// question 1

var number = 10
console.log ("The value of a is " + number)
++number
console.log("After pre increment"   + number)   
number++
console.log("After post increment" + number)
--number
console.log("After pre decrement" + number)
number--
console.log("After post decrement" + number)
console.log("Now the value of number is " + number)

// question 2

var a = 2
var b = 1

console.log(--a - --b + ++b + b--);

// 1 - 0 + 1 + 1
// 3 answer

// question 3

var user = prompt ("Enter your name")
console.log("Welcome to my page "+ user);

// question 4 missing


// question 5
var userNum = +prompt ("Enter a number")
if (userNum){
    document.write(userNum + " * 1 = " + (userNum*1) + "<br>")
    document.write(userNum + " * 2 = " + (userNum*2) + "<br>")
    document.write(userNum + " * 3 = " + (userNum*3) + "<br>")
    document.write(userNum + " * 4 = " + (userNum*4) + "<br>")
    document.write(userNum + " * 5 = " + (userNum*5) + "<br>")
    document.write(userNum + " * 6 = " + (userNum*6) + "<br>")
    document.write(userNum + " * 7 = " + (userNum*7) + "<br>")
    document.write(userNum + " * 8 = " + (userNum*8) + "<br>")
    document.write(userNum + " * 9= " + (userNum*9) + "<br>")
    document.write(userNum + " * 10 = " + (userNum*10) + "<br>")

}
else{
     document.write("5 +  * 1 = " + (5*1) + "<br>")
    document.write("5 +  * 2 = " + (5*2) + "<br>")
    document.write("5 +  * 3 = " + (5*3) + "<br>")
    document.write("5 +  * 4 = " + (5*4) + "<br>")
    document.write("5 +  * 5 = " + (5*5) + "<br>")
    document.write("5 +  * 6 = " + (5*6) + "<br>")
    document.write("5 +  * 7 = " + (5*7) + "<br>")
    document.write("5 +  * 8 = " + (5*8) + "<br>")
    document.write("5 +  * 9= " + (5*9) + "<br>")
    document.write("5 +  * 10 = " + (5*10) + "<br>")
}

// question 6

var first = prompt ("First subject")
var second = prompt ("Second subject")
var third = prompt ("Third subject")

var score1 = +prompt ("First score")
var score2 = +prompt ("Second score")
var score3 = +prompt ("Third score")

var totalMarks = 100
var obtainedMarks = (score1 + score2 + score3)


var percentage = obtainedMarks / 300 *100
document.write(`   <table>
        <tr>
            <th>Subject</th>
            <th>Total Marks</th>
            <th>Obtained Marks</th>
            <th>Percentage</th>

        </tr>
        <tr>
            <td>${first}</td>
            <td>${totalMarks}</td>
            <td>${score1}</td>
            <td>${(score1 / totalMarks * 100)}%</td>
        </tr>
        <tr>
            <td>${second}</td>
            <td>${totalMarks}</td>
            <td>${score2}</td>
            <td>${(score2 / totalMarks * 100)}%</td>
        </tr>
        <tr>
            <td>${third}</td>
            <td>${totalMarks}</td>
            <td>${score3}</td>
            <td>${(score3 / totalMarks * 100)}%</td>
        </tr>
        <tr>
            <td></td>
            <td>300</td>
            <td>${obtainedMarks}</td>
            <td>${percentage}%</td>
        </tr>
    </table>
    `)

    // question 7 missing