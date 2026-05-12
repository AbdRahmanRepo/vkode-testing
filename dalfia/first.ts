// Function to evaluate grade
function getGrade(mark : number) {
    if (mark < 35) {
        return "Fail";
    } 
    else if (mark >= 35 && mark <= 50) {
        return "Average";
    } 
    else if (mark > 50 && mark <= 80) {
        return "Good";
    } 
    else {
        return "Excellent";
    }
}

// Assign returned value to a variable
let result = getGrade(75);

// Print the variable
console.log(result);

