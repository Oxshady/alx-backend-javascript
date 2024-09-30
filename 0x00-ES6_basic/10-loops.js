export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  const newArray = [];
  for (const value of array) {
    newArray[i] = appendString + value;
    i += 1;
  }

  return newArray;
}
