var book = require("./lib/grades.js").gradeBook;
var express = require("../../../../../usr/local/lib/node_modules/express");
var app = express();

app.listen(3000); //hook up to port 3000 on this computer, if there is any connections made on that port try to respond to them
//express will listen in background for web traffic, code continues to execute with things like console.log, but when the code is finished
//express will keep the program alive so it can keep listening on the port 3000

//WHILE the web-program.js IS RUNNING (i.e. connecting to port 3000), we can access localhost:3000 via web browser without a specific request (req)
//the response (res) will simply be "Hello, World!"
app.get("/", function(req, res) {
    res.send("Hello, World!");
});

//we want to be able to pass in URL parameters/query strings like 'localhost:3000/grade?grades=100,90,80,95' where query is everything following '?'
// '/grade' is the path in the URL
//test URL: http://localhost:3000/grade?mygrades=100,10,90,87,55,65
app.get("/grade", function(req, res){
    //splits all values (by comma) using the query property in the request object which automatically pulls the values after /grade?
    //ex: "1,2,3".split(",") => ["1","2","3"]
    var grades = req.query.mygrades.split(",");
    for (var i = 0; i < grades.length; i++) {
        book.addGrade(parseInt(grades[i]));
    }
    var average = book.getAverage();
    var letter = book.getLetterGrade();
    
    res.send("Average Grade: " + average + ", Final Grade: " + letter);
});

console.log("Server ready...");
