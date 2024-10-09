export default function getStudentIdsSum(studentList) {
  if (!Array.isArray(studentList)) return [];
  return studentList.reduce((acc, student) => acc + student.id, 0);
}
