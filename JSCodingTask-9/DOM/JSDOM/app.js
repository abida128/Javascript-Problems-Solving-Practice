/*

 2. Now get the reference of first div using DOM methods
 3. Change attribute class of this div to ‘changed-class’
 4. After that change the style attribute of that div to give red color to the text and give solid blue border to it. Put some text in the first div too.


 */



 // 2. Now get the reference of first div using DOM methods

 function myFunction(){
let element1;

element1 = document.getElementsByClassName("div-class")[0];

console.log(element1);


// 3. Change attribute class of this div to ‘changed-class’

let element2;

element2 = document.getElementsByClassName("div-class").className = "changed-class" ;

console.log(element2);


//  4. After that change the style attribute of that div to give red color to the text and give solid blue border to it. Put some text in the first div too.


 document.getElementsByClassName("div-class")[0].style.color = "red";

 document.getElementsByClassName("div-class")[0].style.border = "2px solid blue";

 }