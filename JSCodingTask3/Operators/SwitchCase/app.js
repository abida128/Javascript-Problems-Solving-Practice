//  Grade of a person


let grade = 39;

switch  (true ){

// ->A if percentage >85

case (grade > 85):
    document.write("A Grade");

break;

// ->A- if %<=85 and >80

case (grade <= 85 && grade > 80):
    document.write("A- Grade");
    

break;

// ->B if %<=80 and >70

case (grade <= 80 &&  grade >70):
    document.write("B Grade"); 

break;

// ->C if %<=70 and >60

case ( grade <=70 &&  grade > 60):
    document.write("C Grade");

break;

// ->D if %<=60 and >40

case (grade <= 60 && grade > 40):
    document.write("D Grade");
    

break;

// ->E if %<=40 and also should print 'candidate failed' if %<=35

case (grade <= 40 && grade <= 35):
    document.write(" Candidate failed");
    alert("E grade");
    

break;


}