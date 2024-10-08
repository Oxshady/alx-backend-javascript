export default function getStudentIdsSum(students) {
  return students.reduce((totol, ob) => totol + ob.id, 0);
}
