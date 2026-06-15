//let 
let studentcount =10;
studentcount =11;

console.log("studentcount:",studentcount);

//const 
const collegename ="VETIAS";

console.log("collegename:",collegename)

//template literals
let studentname = "Arun"

console.log (`Welcome ${studentname} to ${collegename}`);

//object
const student = {
    Name :"Arun",
    age : 20 ,
    Department :"IT"
}
console.log(student)

//Destructuring
const {name , age, department } =student ;
console.log("Name:" , name);
console.log("Age", age)
console.log("Department:",department)

//Arrow Function
const displaystudent =()=> {
    console.log(`Student Name:${name}`);

}
displaystudent ()

//Arrays
const students = [
    "Arun",
    "priya",
    "devadharshini",
] ;

console.log(students);

//spread operator 
const updatedstudents=[
    ...students,
       "Rahul"

]

console.log(updatedstudents);

//// reset operator
function  maximummarks(...marks){

    let max= Math.max(...marks);

    return max;

}
   console.log ("maximum marks:",maximummarks(80,90,70 )) ;


