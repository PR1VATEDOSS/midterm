function gradingStudents(grades) {

    for (var i = 0; i < grades.length; i++) {
        if (grades[i] >= 38) {
            var nextMultipleOf5 = Math.ceil(grades[i] / 5) * 5;
            if (nextMultipleOf5 - grades[i] < 3) {
                grades[i] = nextMultipleOf5;
            }
        }
    }
    return grades;

}