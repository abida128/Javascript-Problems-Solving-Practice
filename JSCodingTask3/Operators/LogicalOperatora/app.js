// using logical operators

// AND oerator
var x = true;  
var y= true;

document.getElementById('andOperator').innerHTML = (x && y);

//result is true

// AND oerator
let m = false; 
let n = true;

document.getElementById('andOperator').innerHTML = (m && n);
// result is false


// AND oerator

let p = false; 
let q = false;

document.getElementById('andOperator').innerHTML = (p && q);
// result is false

// OR oerator

let t1 = false;
let t2 = true;

document.getElementById('andOperator').innerHTML = (t1 || t2);
// result is true

// AND oerator
let u =5;
let v = 4;
let w = 2;

document.getElementById('andOperator').innerHTML = ( u > v && w < u);
//result is true


// OR oerator
let a =2;
let b = 9;

document.getElementById('andOperator').innerHTML = (a == b || a == a);
// result is true

// NOT oerator

let  c = 4;
let d =2;
console.log(!(!(c>d)));



