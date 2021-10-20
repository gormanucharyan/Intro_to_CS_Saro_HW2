let height = 8;
let base = 10; 
let width = 5;
let length = 8;
let traingleArea = height * base / 2;
let rectangleArea = width * length;
if (rectangleArea > traingleArea){
    console.log("The rectangle has a bigger area");
}
else if (traingleArea > rectangleArea){
    console.log("The triangle has a bigger area");
}
else{
    console.log("The triangle and rectangle have the same area");
}