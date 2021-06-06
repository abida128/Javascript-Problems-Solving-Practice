// add two game names ‘Polo’ and ‘Kabaddi’ to the same array at the third index using the splice method 

// index third is 2

let games = ["Cricket", "Football", "Tabletennis", "Basketball", "Baseball", "Hockey"];

function addGames(){

 
    games.splice(2 , 2 , "Polo", "Kabaddi");
    document.getElementById("heading").innerHTML = games;
}