var customerFirstName = "John"
var customerLastName = "Smith"
var customerAge = 25

// ts: customerFirstName = 25 will give error
// js: customerFirstName = 25 works

var customerFirstName: string = "John"
var customerLastName: string = "Smith"
var customerAge: number = 25

type Customer = {firstName: string, lastName: string, active: boolean}

var firstCustomer: Customer = {
    firstName: "Mary",
    lastName: "Johns",
    active: true
}
console.log(firstCustomer)
