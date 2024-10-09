document.addEventListener("DOMContentLoaded", () => {
  interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }

  const studentOne: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 38,
    location: "Vancouver, CA",
  };

  const studentTwo: Student = {
    firstName: "Jake",
    lastName: "Doe",
    age: 33,
    location: "Missouri, USA",
  };

  const studentsList: Student[] = [studentOne, studentTwo];

  const table = document.createElement("table");

  const tbody = document.createElement("tbody");

  studentsList.forEach((student) => {
    const tr = document.createElement('tr')
    const firstName = document.createElement('td')
    const location = document.createElement('td')
    firstName.innerText = student.firstName
    location.innerText = student.location

    tr.append(firstName, location)
    tbody.append(tr);
  });

  table.append(tbody)

  document.body.appendChild(table)
})