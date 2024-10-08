export default function getListStudentIds(arr) {
  if (typeof (arr) !== typeof ([])) {
    return [];
  }
  return arr.map((ob) => ob.id);
}
