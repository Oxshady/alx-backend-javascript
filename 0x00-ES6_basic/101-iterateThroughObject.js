export default function iterateThroughObject(reportWithIterator) {
  const allEmps = [];
  for (const employee of reportWithIterator) {
    allEmps.push(employee);
  }
  return allEmps.join(' | ');
}
