// Declarative function: can be used before the function declare
helloOne()
function helloOne(){
    console.log("Hello one!")
}

helloOne()
helloOne()

// Anoymus function: can't be used before the function declare
var helloTwo = function(){
    console.log("Hello two!")
}
helloTwo()

//ES6 function syntax or arrow function
var helloThree = () => {
    console.log("Hello three!")
}
helloThree()

// Function with arguments
function printName(name, age) {
    console.log("Hello " + name + " your age is " + age)
}
printName("Daniel", 18)

// Function with return
function multiplyByTwo(number) {
    var result = number *2
    return result
}
var myResult = multiplyByTwo(5)
console.log(myResult)

// Import function
import { printAge } from "../helpers/printHelper.js"
printAge(20)

// Import everything
import * as helper from "../helpers/printHelper.js"
helper.printAge(30)