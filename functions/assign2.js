/*                   Area Calculator:
 Create functions to calculate the area of a circle, square, and rectangle.*/

 //Area  of circle

  let circleArea=(radius) => {
    return Math.PI * radius * radius;
 }

let area = circleArea(4)
console.log ("The Circle area =",area) 

//Area of Square
let squareArea = (side) => {
  return side*side
}
let area2 = squareArea(4)
console.log("The Square Area is :",area2)

//Area of Rectangle

let rectangleArea = (length,breath) => {
  return length*breath
}

let area3 = rectangleArea(3,4)
console.log("The Rectangle Area is :",area3)