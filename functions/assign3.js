/*                           Grade Checker:
 Write a function that accepts a score and returns the corresponding grade (A, B, C, etc.).*/

 function gradeChecker() {
    // Prompt the user for their score
    let score = prompt("Enter your score:");

    score = Number(score);

  
    if (isNaN(score)) {
        alert("Please enter a valid number.");
    } else if (score >= 90) {
        alert("Grade: A");
    } else if (score >= 80) {
        alert("Grade: B");
    } else if (score >= 70) {
        alert("Grade: C");
    } else if (score >= 60) {
        alert("Grade: D");
    } else {
        alert("Grade: F");
    }
}

gradeChecker();


