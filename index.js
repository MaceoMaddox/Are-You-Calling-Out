const inquirer = require("inquirer")
// const jest = require("jest")
const fs = require("fs")
const Employee = require("./lib/employee.js")
const Manager = require("./lib/manager.js")
const Engineer = require("./lib/engineer.js")
const Intern = require("./lib/intern.js")
const generateTeam = ("./src/generateTeam.js")

const team = [];

const generateManager = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "Enter manager name:",
        },
        {
            type: "input",
            name: "id",
            message: "Enter manager ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter manager email:"
        },
        {
            type: "input",
            name: "office",
            message: "Enter manager office number:"
        },
    ])
    .then(managerData => {
        let {name, id, email, office} = managerData;
        const manager = new Manager (name, id, email, office);
        team.push(manager);
    })
}

const generateEmployee = () => {
    return inquirer.prompt ([
        {
            type: "list",
            name: "role",
            message: "Employee role:",
            choices: ["Engineer", "Intern"]
        },
        {
            type: "input",
            name: "name",
            message: "Enter employee name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter employee ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter employee email:"
        },
        {
            when: (input) => input.role === "Engineer",
            type: "input",
            name: "github",
            message: "Enter engineer's github:",
        },
        {
            when: (input) => input.role === "Intern",
            type: "input",
            name: "school",
            message: "Enter intern's school name:",
        },
        {
            type: "confirm",
            name: "addEmployee",
            message: "Add employee?",
            default: false
        },
    ])

    .then(employeeData => {
        let {name, id, email, role, github, school, addEmployee} = employeeData;
        let employee;
        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
        }
        team.push(employee);
        if (generateEmployee) {
            return generateEmployee(team);
        } else {
            return team;
        }
    })
}

const writeFile = data => {
    fs.writeFile("./dist/index.html", data, err =>
    {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("team generated")
        }
    })
}

generateManager()
    .then(generateEmployee)
    .then(team => {
        return generateTeam(team);
    })
    .then(teamHTML => {
        return writeFile(teamHTML);
    })
    .catch(err => {
        console.log(err)
    });