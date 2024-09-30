export default function appendToEachArrayValue(array, appendString) {
  new_array = [];
  for (const value of array) {
    new_array.push(appendString + value);
  }

  return new_array;
}
