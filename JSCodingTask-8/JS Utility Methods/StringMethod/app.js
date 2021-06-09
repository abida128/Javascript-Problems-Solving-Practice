// Use .length property to print length of a string cityName = ‘Tokyo’
// Find the index of ‘o’ character in the given string using indexOf method
// Use search method to locate ‘o’ in the given string and notice the difference between indexOf and search methods

// 1. Use .length property to print length of a string cityName = ‘Tokyo’


let cityName = 'Tokyo';

let  name = cityName.length;
console.log(name);
// document.write("This is  length of Tokyo" + ":" + name + "<br>");


// 2. Find the index of ‘o’ character in the given string using indexOf method

 let index = cityName.indexOf('o');
 console.log(index);
 // document.write("This is index of 'O'"+ ":" + index + "<br>");



 // 3.  Use search method to locate ‘o’ in the given string and notice the difference between indexOf and search methods


 let search = cityName.search('o');
 console.log(search);
 // document.write("This is search of 'O'"+ ":" + search);