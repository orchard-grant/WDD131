// Variables and Constants
const PI = 3.14;
let radius = 3;
console.log("PI:", PI);
console.log("Radius:", radius);

// Type Coercion
const one = 1;
const two = '2';
console.log("one + two =", one + two);  // JS turns number into string: "12"
console.log("one + Number(two) =", one + Number(two));  // Fix coercion: 3

// Global vs Block Scope
let course = "CSE131"; // global scope
if (true) {
    let student = "John"; 
    console.log(course);  // works
    console.log(student); // works
}
console.log(course);      // works
console.log(student);     // error (not defined outside block)
