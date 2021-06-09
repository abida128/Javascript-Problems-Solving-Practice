//  A-- Suppose you’re given this array: let agesArray = [12,45,56,4]. Use map method to print all of the values and their indices. After that use map method to make a new array from the same array by multiplying each age value by 10.
  

let agesArray = [12,45,56,4];


//  Use map method to print all of the values and their indices

 let newArray = agesArray.map(myFuction);

 function myFuction(n , indices){

      console.log("Index" + ":", indices, "Value" +":", n);
 }



 console.log(agesArray );

// multiple array by 10

  let number = agesArray.map(test);
  console.log(number);
  function test(a){
      return  a * 10;
  }

  

// B -- Suppose you’re given an array of objects:
 let usersData = [
            {
            name: 'Saeed', 
            lastName: 'Ahmad',
            school: 'UoT',
            profession: 'engineer'

            },

            {
            name: 'Ali',
            lastName: 'Khan',
            school: 'TUM',
            profession: 'researcher'
            }
];

// Use map method to print each value in a table. 

let  user = usersData.map(newdata);
console.log(user);

function newdata(x){
    return x.name + "" + x.lastName + "" + x.school + "" + x.profession;

}
 