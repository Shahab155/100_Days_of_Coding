// Question 51: Refactoring to Arrow Functions: Take a simple function that
//  calculates the area of a rectangle and refactor it into an arrow function.
// making a regular function:
function areaOfRectangle(height, width) {
    return height * width;
}
areaOfRectangle(23, 32);
// refactoring to arrow function:
var areaOfRectangleArrow = function (height, width) { return height * width; };
console.log(areaOfRectangleArrow(20, 10));
