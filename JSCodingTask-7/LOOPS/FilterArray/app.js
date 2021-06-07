
// Use filter function to filter an array containing values of ages of [40, 56, 80, 90, 100, 101, 102, 23, 22]
// Use it to filter the ages greater than or equal to 40.


let ages = [40, 56, 80, 90, 100, 101, 102, 23, 22];
    
        document.write(ages + "<br><br>");
 

let  value = ages.filter(checkAdult);

document.write("These are the ages greater than or equal to 40:" + "<br><br>") ;


document.write(value + "<br><br>");

    function checkAdult(age){
        return age >= 40;
    }