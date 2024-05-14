// Question 51: Refactoring to Arrow Functions: Take a simple function that
//  calculates the area of a rectangle and refactor it into an arrow function.

// Origional function to calculate arae: 
function areaOfRectangle(height:number,width:number):number{
    return height  * width 
    
}
areaOfRectangle(23,32)

// refactoring to arrow function:

var areaOfRectangleArrow = (height:number,width:number):number => height * width


console.log(areaOfRectangleArrow(20,10))