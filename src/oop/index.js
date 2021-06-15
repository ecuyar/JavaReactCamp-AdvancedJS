class Customer {
    constructor(id, customerNumber) {}
}

class Customer1 {
    constructor(id, customerNumber) {
        this.id = id
        this.customerNumber = customerNumber
    }
}

let customer = new Customer(1, "12345")
let customer1 = new Customer1(2, "9876")
console.log("Customer.id: " + customer.id) //undefined

//PROTOTYPING -> giving different properties to an object. 
//Prototyping to instance. 
//If we want to reach properties of instance we add this.id = id; to class constructor 
customer.name = "Enes"
console.log("Customer.name: " + customer.name) //Enes
console.log("Customer1.customerNumber: " + customer1.customerNumber) //'9876'

//Prototyping to class
Customer.something = "Something"
console.log(Customer.something) //'Something'

//INHERITANCE
class IndividualCustomer extends Customer1 {
    constructor(firstName, id, customerNumber) {
        super(id, customerNumber)
        this.firstName = firstName
    }
}

class CorporateCustomer extends Customer1 {
    constructor(companyName, id, customerNumber) {
        super(id, customerNumber)
        this.companyName = companyName
    }
}