var book = require("./lib/grades.js").gradeBook;
var express = require("../../../../../usr/local/lib/node_modules/express");
var app = express();

app.listen(3000); //hook up to port 3000 on this computer, if there is any connections made on that port try to respond to them
//express will listen in background for web traffic, code continues to execute with things like console.log, but when the code is finished
//express will keep the program alive so it can keep listening on the port 3000

//we want to be able to pass in URL parameters/query strings like 'localhost:3000/grade?grades=100,90,80,95' where query is everything following '?'
// '/grade' is the path in the URL
//test URL: http://localhost:3000/grade?mygrades=100,10,90,87,55,65
app.get("/grade", function(req, res){
    var name = req.query.name;
    var responseString = "";
    //splits all values (by comma) using the query property in the request object which automatically pulls the values after /grade?
    //ex: "1,2,3".split(",") => ["1","2","3"]
    var grades = req.query.mygrades.split(",");
    for (var i = 0; i < grades.length; i++) {
        book.addGrade(parseInt(grades[i]));
    }
    
    var impossibleGrades = book.collectInvalidGrades();
    if (impossibleGrades.length > 0){
        responseString = "There were invalid grades in the GradeBook: ";
        for (var j=0; j < impossibleGrades.length; j++) {
            responseString += impossibleGrades[j] + " ";
        }
        
        responseString += "\nRemoving invalid grades from Gradebook...";
        book.removeInvalidGrades();
        
        responseString += "\nRemaining valid grades:\n";
        var remainingGrades = book.returnGrades();
        for (var k=0; k<remainingGrades.length; k++) {
            responseString += (remainingGrades[k]) + "\n";
        }
    } else {
        responseString += "\nBased on grades:\n";
        var myRemainingGrades = book.returnGrades();
        for (var m=0; m<myRemainingGrades.length; m++) {
            responseString += (myRemainingGrades[m]) + "\n";
        }
    }
    
    
    var average = book.getAverage();
    var letter = book.getLetterGrade();

    res.send("Here are the grades for \'" + name + "\'\n\n" + responseString + "\nAverage Grade: " + average + "\nFinal Grade: " + letter);
});

console.log("Server ready...");
