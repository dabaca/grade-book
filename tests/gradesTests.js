var book = require("../lib/grades").gradeBook;

exports["setUp"] = function(callback) {
    //a setup within a test framework is something that you use to restore your system back to a pristine state,
    //since we're testing on the same book object we will keep adding new grades to test with and this throws off tests further down in the code
    book.reset(); //reset needs to be defined as a function within the gradeBook object so that it can restore the gradeBook back to an empty array
    callback(); //callback parameter, nodeunit will automatically pass that in, it's just a function to let nodeunit know it's finished
};

exports["Can compute letter grade of A"] = function(test) {
    book.addGrade(100);
    book.addGrade(90);
    
    var result = book.getLetterGrade();
    
    test.equal(result, "A");
    test.done();
};

exports["Can remove lowest grade"] = function(test) {
    book.addGrade(100);
    book.addGrade(10);
    
    book.removeLowest();
    
    var grades = book.getAverage();
    
    test.equal(grades, 100);
    test.done();
};

exports["Can average grades"] = function(test) {
    book.addGrade(100);
    book.addGrade(50);
    
    var average = book.getAverage();
    
    //we would expect a grade book with two scores of 100 and 50 to average out to 75, and
    //we can compare the variable average, which was calculated using the getAverage() function
    //in the gradeBook object
    test.equal(average, 75);
    test.done();
};

exports["Can add new grade"] = function(test) {
    book.addGrade(90);
    var count = book.getCountOfGrades();
    test.equal(count,1); // .equal will test if two things (in this case count and 1) are equal
    test.done();
};