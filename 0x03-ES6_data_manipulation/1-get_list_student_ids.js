export default function getListStudentIds(arr) {
  if (typeof (arr) !== typeof ([])) {
    return [];
  }
  return arr.map((i) => {
    if (i.id) {
      return i.id;
    }
    return null;
  });
}
