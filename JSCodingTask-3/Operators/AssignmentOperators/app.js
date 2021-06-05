//What will happen if:

// x=3; x+1; x+=3;

let x =3;

// using assignment operator  x+1

function addNumber(){

    x = x +1;
    document.getElementById('para1').innerHTML =x;

}

    //  using assignment operator  x+=3

function plusNumber(){

    num = x+=3;
    document.getElementById('para2').innerHTML = num;
}


