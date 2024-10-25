const employees = [
    { name: "John Doe", age: 28, department: "Sales", salary: 50000 },
    { name: "Jane Smith", age: 35, department: "Marketing", salary: 60000 },
    { name: "Michael Johnson", age: 42, department: "IT", salary: 80000 },
    { name: "Emily Davis", age: 31, department: "Sales", salary: 55000 },
    { name: "Robert Brown", age: 39, department: "Finance", salary: 70000 },
    { name: "Olivia Wilson", age: 27, department: "Marketing", salary: 55000 },
    { name: "David Taylor", age: 45, department: "IT", salary: 90000 },
];

// Mostrar únicamente los empleados que pertenezcan al departamento de "Sales".
const employeesSales = employees.filter(
    (employee) => employee.department === "Sales"
);
// console.log(employeesSales)
// Mostrar únicamente los empleados que tengan un salario mayor a 60000.
const employeesSalaryGreater60000 = employees.filter(
    (employee) => employee.salary > 60000
);
// console.log(employeesSalaryGreater60000)
// Crea un array que contenga solo los nombres de los empleados.
const nameEmployees = employees.map((employee) => employee.name);
// console.log(nameEmployees)
// Crea un array que contenga solo el nombre y edad de cada empleado.
const nameAndAgeEmployees = employees.map((employee) => {
    return {
        name: employee.name,
        age: employee.age,
    };
});

// Crea un array que contenga los nombres de los empleados menores de 35
const employeesNameLess35 = employees
    .filter((employee) => employee.age < 35)
    .map((employee) => employee.name);
// console.log(employeesNameLess35);

// Crea un array que muestre el nombre y el salario de los empleados que tengan
//  un salario entre 55.000 y 85.000 incluidos

const employeesNameSalary55And85 = employees.filter(
        (employee) => employee.salary >= 55000 && employee.salary <= 85000
    ).map(employee => employee.name)
    // console.log(employeesNameSalary55And85);

// guarda en el localStorage el array que creaste que contiene nombre y edad de cada empleado.

localStorage.setItem("Employees", JSON.stringify(nameAndAgeEmployees))
    // traete del localStorage ese array que has guardado previamente y muestralo por consola
const employeesSaved = JSON.parse(localStorage.getItem("Employees"))
console.log(employeesSaved)
    // pinta en el DOM el nombre y edad de cada empleado utilizando el array que te has traido del localStorage

const employeesDiv = document.getElementById("employees")

employeesSaved.forEach(employee => {
    // console.log(employee.name)
    // employeesDiv.insertAdjacentHTML("beforebegin", `<p>${employee.name}</p>`)
    employeesDiv.innerHTML += `<p>${employee.name}</p>`
});