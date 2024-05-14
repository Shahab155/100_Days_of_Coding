// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.

let Laptops = [
  {
    make: "Dell",
    model: "G Series",
    year: 2022,
  },
  {
    make: "Apple",
    model: "MacBook Air",
    year: 2020,
  },
];

let [firstLaptop, secondLaptop] = Laptops;

console.log(firstLaptop);
console.log(secondLaptop);

// Destructuring Array:
//  ex:1
// let person = ["Shahabuddin",20,"Pano Akil" ]

// let [name1, age,city] = person

// ex:2
// let laptop = ["hp",2023,"pavilion" ]

// let [make,year , model] = laptop
// console.log(make)
// console.log(year)
// console.log(model)

// <========= ex3:================>
// Rest operator for array destructuring:

// let car = ["GLI","Silver","Number Plate",2013]

// let [carName, ...features] = car
// console.log(carName)
// console.log(features)

// <==========================>
// Array using function:
// ex:1
//     function person([name1,age,city]){
// console.log(name1)
// console.log(age)
// console.log(city)

//     }
// person(["Shahab",20,"Pano Akil"])

// ex:2
// function student(){
//     return ["Shahab",20,"Pano Akil"]
// }
// let [name1,age,city] = student()

// console.log(name1)
// console.log(age)
// console.log(city)
