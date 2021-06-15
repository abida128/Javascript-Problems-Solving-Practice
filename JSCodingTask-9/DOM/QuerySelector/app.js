// using Query Selector we solve the first problem


/*
 2. Now get the reference of first div using DOM methods
 3. Change attribute class of this div to ‘changed-class’
 4. After that change the style attribute of that div to give red color to the text and give solid blue border to it. Put some text in the first div too.


 */



 // 2. Now get the reference of first div using DOM methods

 function my_Function(){
   let element1;

 element1 = document.querySelector("#div-one")[0];
 console.log(element1);
 

 // 3. Change attribute class of this div to ‘changed-class’
 let element2; 
element2 = document.querySelector("#div-one").className = "changed-class";
console.log(element2);

 
 //  4. After that change the style attribute of that div to give red color to the text and give solid blue border to it. Put some text in the first div too.
 
  document.querySelector("#div-one").style.color ="red";
  document.querySelector("#div-one").style.border ="5px solid blue";

 
 
}