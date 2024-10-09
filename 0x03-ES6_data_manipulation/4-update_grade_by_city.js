export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const grades = newGrades.find((studentGrade) => studentGrade.studentId === student.id);
      const obj = { ...student };
      if (grades) {
        obj.grade = grades.grade || 'N/A';
      } else {
        obj.grade = 'N/A';
      }
      return obj;
    });
}
