// Object and Arrays
// Object
var customer = {
    firstname: "John",
    lastname: "Smith",
    cars: ['Volvo', 'Toyota', 'Tesla']
}
console.log(customer)
console.log(customer.firstname)
console.log(customer['lastname'])

customer.firstname = "Mike"
customer['lastname'] = 'Silver'
console.log(customer.firstname +' ' +customer.lastname)

// Arrays
var car = ["Volvo", "Toyota", "Tesla"]
console.log(car[1])
car[1] = "Honda"
console.log(car[1])

console.log(customer.cars[2])
