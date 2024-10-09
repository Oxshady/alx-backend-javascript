export function cleanSet(set, subs) {
  let data = [];
  if (subs === '') {
    return '';
  }
  for (const i of set) {
    if (i.startsWith(subs))
    {
      data.push(i.substr(subs.length))
    }
  }
  data = data.join('-');
  return data;
}
