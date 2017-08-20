var book = require("./lib/grades.js").gradeBook;

for (var i = 2; i<process.argv.length; i +=1) {
    book.addGrade(parseInt(process.argv[i]));
}

var impossibleGrades = book.collectInvalidGrades();
if (impossibleGrades.length > 0){
    console.log("There were invalid grades in Gradebook:");
    for (var i=0; i < impossibleGrades.length; i++) {
        console.log(impossibleGrades[i]);
    }
}

console.log("\nAutomatically removing invalid grades...");
book.removeInvalidGrades();

console.log("\nRemaining valid grades:");
var remainingGrades = book.returnGrades();
for (var k=0; k<remainingGrades.length; k++) {
    console.log(remainingGrades[k]);
}

console.log("Average Grade: " + book.getAverage() + ", Final Grade: " + book.getLetterGrade());
console.log("BUT since I'm nice I'll drop your lowest grade!!");

book.removeLowest();

console.log("Average Grade: " + book.getAverage() + ", Final Grade: " + book.getLetterGrade());