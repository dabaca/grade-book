var book = require("./lib/grades.js").gradeBook;

for (var i = 2; i<process.argv.length; i +=1) {
    book.addGrade(parseInt(process.argv[i]));
}

console.log("Average Grade: " + book.getAverage() + ", Final Grade: " + book.getLetterGrade());
console.log("BUT since I'm nice I'll drop your lowest grade!!");

book.removeLowest();

console.log("Average Grade: " + book.getAverage() + ", Final Grade: " + book.getLetterGrade());