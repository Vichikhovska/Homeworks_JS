class Description {
  constructor(firstName, lastName, position) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
  }
}

const employeeDescription = [
  new Description("John", "Doe", "CEO"),
  new Description("Nick", "Scott", "Manager"),
  new Description("Laura", "Cambarerri", "Analyst"),
  new Description("Victoria", "Nelson", "Coach"),
  new Description("Ivan", "Vichikhovskiy", "Buyer"),
  new Description("Anastasiia", "Vichikhovska", "Developer"),
  new Description("Maria", "Croump", "Sales Manager")
];

class Table {
  constructor(employees) {
    this.employees = employees;
  }

  getHtml() {
    let tableHtml = "<table>";
    tableHtml += "<tr><th>First Name</th><th>Last Name</th><th>Position</th></tr>";

    for (const employee of this.employees) {
      tableHtml += `<tr><td>${employee.firstName}</td><td>${employee.lastName}</td><td>${employee.position}</td></tr>`;
    }

    tableHtml += "</table>";
    return tableHtml;
  }

  displayTable(containerSelector) {
    const container = document.querySelector(containerSelector);
    container.innerHTML = this.getHtml();
  }
}

const container = document.createElement("div");
container.classList.add("table-container");

document.body.appendChild(container);

const tableOnDisplay = new Table(employeeDescription);
tableOnDisplay.displayTable(".table-container");
