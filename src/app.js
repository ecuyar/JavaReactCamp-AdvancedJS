let myStudent = { id: 1, name: "Enes" }

//function with default parameter. if not given, always equal 10
function print(student, point = 10) {
    // console.log(student.name + " : " + point)
}
print(myStudent) // with single parameter


//normally function's default parameter stay at the last position but if we 
//want to use it not here, while calling the function send 'undefined' for it 
function print1(point = 20, student) {
    // console.log(student.name + " : " + point)
}
print1(undefined, myStudent)

//REST PARAMETER
//c# -> params, java -> varArgs
//automatically converts other (except first) parameters into array
//if we send array, converts it again array(array inside array).
let showProducts = function(id, ...products) {
        // console.log(id)
        // console.log(products)
    }
    // showProducts()
    // showProducts(10, "Apple", "Pear", "Strawberry")
    // showProducts(10, ["Apple", "Pear", "Strawberry"])


//SPREAD
//spreads the array
let points = [14, 56, 33, 89, 90, 34]
console.log(...points) //'14 56 33 89 90 34'
console.log(Math.max(points)) //can not get array because it wants paramters like 1,2,3,4,5,6
console.log(Math.max(...points)) //can read the array

console.log(...
        "ABC", "D", ...
        "EFGH", "I") //spreads the char array 'A B C D E F G H I'


//DESTRUCTURING
//assign elements to variables
let populations = [10000, 30000, 150000, [200000, 300000]]
let [small, medium, high, [veryHigh, maximum]] = populations
console.log("Small: " + small)
console.log("Medium: " + medium)
console.log("High: " + high)
console.log("Very High: " + veryHigh)
console.log("Maximum: " + maximum)

function aFunction([small1], number) {
    console.log("aFunction: " + small1)
}
aFunction(populations)

let category = { id: 1, name1: "Drink" }
console.log(category.id)
console.log(category["name1"])

//pass object properties to variables
let { id, name1 } = category
console.log(id)
console.log(name1)