export default function getListStudentIds(arr) {
  const newArray = [];
  if (typeof (arr) !== typeof ([])) {
    return [];
  }
  for (const i of arr) {
    if (i.id) {
      newArray.push(i.id);
    }
  }
  return newArray.map((i) => i);
}
