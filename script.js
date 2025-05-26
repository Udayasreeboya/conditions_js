marks=70
if (marks>=75 && marks<=100){
    console.log(" you have passed in Distinction")
}
else if(marks<75 && marks>=60){
    console.log("you have passed in First class")
}
else if(marks<60 && marks >=50){
    console.log("you have passed in Second class")
}
else if(marks>=35 && marks<50){
    console.log("you have passed with pass marks")
}
else{console.log("you got Failed")}


//switch

let operator = "*" 
let num1 = 10
let num2 = 5

switch (operator) {
  case "+":
    console.log(num1 + num2)
    break

  case "-":
    console.log(num1 - num2)
    break

  case "*":
    console.log(num1 * num2)
    break

  case "/":
    console.log( num1 / num2 )
    break

  default:
    console.log("Invalid operator")
}
