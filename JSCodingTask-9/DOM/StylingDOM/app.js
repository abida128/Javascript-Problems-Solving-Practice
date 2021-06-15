/*
3. Now get the reference of first div using DOM methods
4. Print the color and border of the div
5. Change color of the text using DOM set methods or replace it using some other technique
*/

function newFunction() {
        
         let element1 = document.querySelector(".div-one").style.border;
         console.log(element1);
        

        let element2 = document.querySelector(".div-one").style.color;
        console.log(element2);

        let element3 = document.querySelector("#div-new").style.color = "red";
         console.log(element3);

}  