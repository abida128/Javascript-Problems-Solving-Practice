
/*  
    1. First create a Function for "SUM" of two variables
    2. Function name is "sum"
    3. Let we have two variables x and y
    4. Introduced statement of function 
    5. Next step is calling the Function, which we do it outside of the closing function
    6. Finally given the values of both varibles 




*/


// 1. Create/Declaration  Function

function sum(x , y){
    
    document.write("Sum", "=", "",x + y);
    document.write('<br>');

}

// Calling Function
sum(187,315);
sum(2.25,3);
sum(12,34);


// 2. Example #2
function  addingNumbers(num1,num2){

    let add = num1 + num2;
    return add;


}