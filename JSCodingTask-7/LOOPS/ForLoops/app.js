
// A --- Write a for loop to traverse the array and find if ‘Cricket’ exists in the array. Print ‘Cricket exists’ if it is in the array. Otherwise print ‘Does not exist’
// B --- Write a forEach loop and attempt the same problem as above.
// C ---Write a for..of loop and attempt the same problem as above


let games = ["Volleyball", "Football", "Tennis", "Cricket", "Basketball", "Polo"];

for( i=0; i < games.length;i++ ){
    if(games[i] = "Cricket"){
    console.log("Cricket Exists");

    }

    else{
        console.log("Does not Exists");
    }
    

}
// For Each Loop

games.forEach(function(element){
    console.log(element);
    document.write(element + "<br> <br>");

});

// For.... Of Loop
    for (let [i,a] of ["Volleyball", "Football", "Tennis", "Cricket", "Basketball", "Polo"].entries()){
        console.log(i,a);
        document.write(i,a );
    }