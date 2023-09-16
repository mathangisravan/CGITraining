// Two syntaxes for creating an Ayyay
let arr1 = new Array(); // using new keyword(constructor)
let arr2 = []; // Using square braces

// Initializing the array with elements
let fruits = ["apple", "banana", "mango"];

//Getting the elements of the array using their index values
console.log(fruits[0]); //first element of array
console.log(fruits[1]); //second element of array
console.log(fruits[2]); //third element of array

// Replacing an element in the array
fruits[0] = "Pineapple"; // apple is replaced by pineapple
console.log(fruits[0]); // Updates array: ["Pineapple","banana","mango"]

// Add new element to the array
fruits[3] = "Grapes"; //Updated array: ["[Pinaapple","banana","mango","Grapes"]
console.log(fruits[3]);

// Finding length of the array
console.log(fruits.length); // length of array : 4