let myStudent = { id: 1, name: "Enes" }

//function with default parameter. if not given, always equal 10
function print(student, point = 10) {
    console.log(student.name + " : " + point)
}
print(myStudent) // with single parameter


//normally function's default parameter stay at the last position but if we 
//want to use it not here, while calling the function send 'undefined' for it 
function print1(point = 20, student) {
    console.log(student.name + " : " + point)
}
print1(undefined, myStudent)