let a = 1;
let b = -3;
let c = -4;
let x;
if(a == 0){
    if(b == 0){
        console.log("Unsolvable");
    }
    else{
    x  = -c/b;
    console.log("The solution for this equation is " + x);
    }
}
else{
    let d = b**2 - 4*a*c;
    if(d == 0){
        x = -b/(2*a);
        console.log("The solution for this equation is " + x);
    }
    else if(d < 0){
        console.log("Unsolvable");
    }
    else{
        let x1 = (-b + Math.sqrt(d))/(2*a);
        let x2 = (-b - Math.sqrt(d))/(2*a);
        console.log("The solutions for this equation are " + x1 + " and " + x2);

    }
}