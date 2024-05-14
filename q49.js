// Question 49: Function with Rest Parameters: Write a function that
//  takes a rest parameter representing multiple hobbies. It should 
//  log each hobby with a statement saying you enjoy that hobby.
function myHobby() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    for (var _a = 0, hobbies_1 = hobbies; _a < hobbies_1.length; _a++) {
        var hobby = hobbies_1[_a];
        console.log("".concat(hobby, " is my hobby and I enjoy it. "));
    }
}
myHobby("Playing Cricket");
myHobby("Reading Books");
myHobby("Writting Poems");
// // Defines a function that accepts multiple hobbies as arguments
// function logHobbies(...hobbies: string[]) {
//     // Loops through each hobby in the array
//     hobbies.forEach(hobby => {
//         // Logs a statement for each hobby
//         console.log(`I enjoy ${hobby}.`);
//     });
// }
// // Calls the function with three hobbies
// logHobbies("reading", "coding", "cycling");
