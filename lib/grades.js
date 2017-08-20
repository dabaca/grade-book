var gradeBook = {
    //creating an empty array _grades w no grades, when something is underscored it is meant to only
    //be used by the object itself, someone outside of the object should not manipulate _grades, only for
    //the gradeBook to use
    _grades: [],
    
    addGrade: function(newGrade){
        this._grades.push(newGrade); //need to use the this. keyword to access members of this gradeBook object
    },
    
    getCountOfGrades: function() {
        return this._grades.length;
    },
    
    returnGrades: function() {
        return this._grades;
    },
    
    getAverage: function() {
        var totalScore = 0;
        for (var i=0; i<this._grades.length; i++){
            totalScore += this._grades[i];
        }
        return totalScore / this._grades.length;
    },
    
    getLetterGrade: function() {
        var average = this.getAverage();
        var letterGrade;
        if (average > 89) {
            letterGrade = "A";
        } else if (average > 79) {
            letterGrade = "B";
        } else if (average > 69) {
            letterGrade = "C";
        } else if (average > 59) {
            letterGrade = "D";
        } else {
            letterGrade = "F";
        }
        return letterGrade;
    },
    
    removeLowest: function() {
        var lowestGrade = 100;
        for (var i=0; i<this._grades.length; i++) {
            if (this._grades[i] < lowestGrade) {
                lowestGrade = this._grades[i];
            }
        }
        var indexOfLowest = this._grades.indexOf(lowestGrade);
        if (indexOfLowest > -1) {
            this._grades.splice(indexOfLowest, 1);
        }
    },
    
    //returns an array of all the grades in the _grades array that are not in the 0-100 valid range
    collectInvalidGrades: function() {
        var impossibleGrades = [];
        for (var i=0; i<this._grades.length; i++) {
            if (this._grades[i] > 100 || this._grades[i] < 0) {
                impossibleGrades.push(this._grades[i]);
            }
        }
        return impossibleGrades;
    },
    
    //removes invalid grades from the _grades array
    removeInvalidGrades: function() {
        var impossibleGrades = [];
        for (var i=0; i<this._grades.length; i++) {
            if (this._grades[i] > 100 || this._grades[i] < 0) {
                impossibleGrades.push(this._grades[i]);
            }
        }
        for (var j=0; j<impossibleGrades.length; j++) {
            var index = this._grades.indexOf(impossibleGrades[j]);
            if (index > -1) {
                this._grades.splice(index, 1);
            }
        }
    },
    
    reset: function() {
        this._grades = [];
    },
    
};

exports.gradeBook = gradeBook;