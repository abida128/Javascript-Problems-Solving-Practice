/**
 
1. Put a relevant event using addEventListener.
2. Now write a function that’d be called on that event
3. Check that whether values of both email and password fields are empty or not using the same function
4. If any of the fields is empty, ask use to fill up the fields
5. If both are filled, show an alert saying ‘Logged In Successfully’.
6. Also, check for format of email in the first input field and ensure that password field’s length is not less than 8 character.

*/




document.querySelector("#div-1").addEventListener("click" , function clickFunction(){
    let email = document.getElementById["email"].innerHTML.value;
    let password = document.getElementById["password"].innerHTML.value;
    let passwordlength = 8;
    if(email == ""){
        alert("Fill up this field");
        
    }
    else if(password == ""){
            alert("Fill up this field");
    }
    else if(passwordlength =8){
            alert("Password length should be 8 characters");
    }
    else {
            alert("Logged In Successfully");
    }

 
});




