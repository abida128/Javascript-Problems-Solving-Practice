// Loop values of object’s properties by using for...in loop and print them.


// 1. first example

let numbers = {
    a : 23, 
    b : 34, 
    c :  5,
    d : 32, 
    e : 57,
    f :  2,
    g :  0,
    h :  8};

for(let property  in numbers){
     console.log(`${property}: ${numbers[property]}`);
}

// 2. second example

var users = {
    name: "Anabia",
    age: 36,
    qualification:  "MA",
    email: 'anabia@gmail.com',
}


for( var x  in users){
     console.log( `${x}: ${users[x]}`);
    // document.write(  `${"<br><br>" + x}:  ${users[x]}`);
}