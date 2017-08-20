-Simple program to take grades as input and give feedback to either the console (console-program.js) or a web browser (web-program.js)

-For the web application you want to use this format in the URL input:
http://localhost:3000/grade?mygrades=100,10,90,87,55,65,200,350,-2,78,88

There were invalid grades in the GradeBook: 200 350 -2 
Removing invalid grades from Gradebook...
Remaining valid grades:
100
10
90
87
55
65
78
88

Average Grade: 71.625
Final Grade: C



-For the console application you want to use this format in command line:
davidbaca@Davids-MacBook-Pro.local:~/Projects/NPM Java Projects/grade-book$ node console-program.js 45 90 99 78 88 -100 22 987
There were invalid grades in Gradebook:
-100
987

Automatically removing invalid grades...

Remaining valid grades:
45
90
99
78
88
22
Average Grade: 70.33333333333333, Final Grade: C
BUT since I'm nice I'll drop your lowest grade!!
Average Grade: 80, Final Grade: B

