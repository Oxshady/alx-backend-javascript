export default function hasValuesFromArray(set, array) {
  for (const i of array.map((item) => {
    for (const i of set) {
      if (item === i) {
        return true;
      }
    }
    return false;
  })) {
    if (i === false) {
      return false;
    }
  }
  return true;
}
