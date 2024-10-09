export default function cleanSet(set, subs) {
  let data = [];
  if (subs === '') {
    return '';
  }
  for (const i of set) {
    if (i.includes(subs)) {
      data.push(i.substr(subs.length));
    }
  }
  data = data.join('-');
  return data;
}
