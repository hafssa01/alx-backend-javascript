export default function cleanSet(set, startString) {
  return Array.from(set)
    .filter((element) => element.startsWith(startString))
    .map((element) => element.substring(startString.length))
    .join('-');
}
