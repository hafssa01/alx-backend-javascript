export default function getStudentsByLocation(array, city) {
  return array.filter((c) => c.location === city);
}
