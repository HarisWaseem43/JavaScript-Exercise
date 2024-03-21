function gradeEvaluation(totalMarks, finalExam) {
  if (totalMarks >= 89 && totalMarks <= 100) {
    return finalExam ? totalMarks >= 90 : true;
  } else {
    return false;
  }
}

console.log(gradeEvaluation(95, true));
console.log(gradeEvaluation(88, false));
console.log(gradeEvaluation(90, false));
console.log(gradeEvaluation(85, true));
