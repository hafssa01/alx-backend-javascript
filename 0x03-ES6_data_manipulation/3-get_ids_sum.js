export default function getStudentIdsSum(array) {
  return array.reduce((s, c) => s + c, 0);
}
