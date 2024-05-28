export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  for (const names of reportWithIterator) {
    str += `${names} | `;
  }
  return str.slice(0, -3);
}
