// design a rocket launching problem


/*
    Rocket launch if
    1. is it raining?
    2. is it snowing?
    3. is it wind speed less than or greater than 20km/h?
 


*/

// conditions are 

let  isRain = false;
let isSnow = false;
let isSpeed = 17.5;


// AND operator 

let rocketLaunch =(isRain == false) && (isSnow != true) && (isSpeed > 20);

alert(rocketLaunch);


//AND and OR operator

let rockLaunch =(isRain === false) && (isSnow === true) || (isSpeed < 20);

alert(rockLaunch);


//OR and AND operator

let rketLaunch =(isRain == false) || (isSnow  === false) && (isSpeed < 20);

alert(rketLaunch);


