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
  table.style.borderCollapse = "collapse";
  table.style.width = "100%"; 

  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');

  const thFirstName = document.createElement('th');
  thFirstName.innerText = 'First Name';
  const thLocation = document.createElement('th');
  thLocation.innerText = 'Location';

  headerRow.append(thFirstName, thLocation);
  thead.append(headerRow);
  table.append(thead);

  const tbody = document.createElement("tbody");

  studentsList.forEach(({ firstName, location }) => {
    const row = document.createElement('tr');
    
    const tdFirstName = document.createElement('td');
    tdFirstName.innerText = firstName;

    const tdLocation = document.createElement('td');
    tdLocation.innerText = location;

    row.append(tdFirstName, tdLocation);
    tbody.append(row);
  });

  table.append(tbody);
  document.body.appendChild(table);
});