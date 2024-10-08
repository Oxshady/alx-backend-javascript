export default function getStudentsByLocation(students, city) {
  return students.filter((ob) => {
    if (ob.location === city) {
      return ob;
    }
    return null;
  });
}
