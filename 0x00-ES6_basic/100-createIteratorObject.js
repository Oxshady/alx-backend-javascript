export default function createIteratorObject(obj) {
  const allEmps = [];
  for (const i of Object.values(obj.allEmployees)) {
    allEmps.push(...i);
  }
  return {
    [Symbol.iterator]() {
      const index = 0;
      return {
        next() {
          if (index < allEmps.length) {
            return { value: allEmps[index], done: false };
          }
          return { done: true };
        },
      };
    },
  };
}
