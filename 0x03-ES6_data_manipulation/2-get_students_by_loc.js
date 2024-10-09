export default function getStudentsByLocation(studentsList, city) {
  if (!Array.isArray(studentsList)) return [];
  return studentsList.filter((student) => student.location === city);
}
