interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Sara",
    lastName: "Saber",
    age:22,
    location: "Albinia"
};

const student2: Student = {
    firstName: "Hajar",
    lastName: "Najih",
    age: 25,
    location: "Egypt"
}

const studentsList: Array<Student> = [student1, student2];
// Render a table using vanilla JavaScript
const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);