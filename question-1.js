function findStudentById(students, id) {
  for (let index = 0; index < students.length; index++) {
    if (students[index].id === id) {
      return { id: id, name: students[index].name };
    }
    return null;
  }

  // console.log(students);

  // Your code here
}

// Test case
const students = [
  { id: 302, name: "Emily Carter" },
  { id: 105, name: "Michael Johnson" },
  { id: 501, name: "Sarah Wilson" },
  { id: 207, name: "Daniel Brown" },
  { id: 403, name: "Sophia Martinez" },
];

console.log(findStudentById(students, 302)); // Output: { id: 302, name: "Emily Carter" }
console.log(findStudentById(students, 4)); // Output: null
