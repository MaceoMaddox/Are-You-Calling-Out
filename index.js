const inquirer = require("inquirer")
// const jest = require("jest")
const fs = require("fs")
const Employee = require("./lib/employee.js")
const Manager = require("./lib/manager.js")
const Engineer = require("./lib/engineer.js")
const Intern = require("./lib/intern.js")
const generateTeam = ("./src/generateTeam.js")

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
            message: "Enter manager offcie number:"
        },
    ])
    .then(managerData => {
        let {name, id, email, office} = managerData;
        const manager = new Manager (name, id, email, office);
    })
}

const generateEmployee = () => {
    return inquirer.prompt ([
        {
            type: "list",
            name: "role",
            message: "Employee role:",
            choices: ["Manager", "Engineer", "Intern"]
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
        // {
        //     type: "list",
        //     name: "addEmployee",
        //     message: "Add employee:",
        //     choices: ["Manager", "Engineer", "Intern"],
        // },
    ])
    .then(employeeData => {
        let {name, id, email, role, github, school} = employeeData;
        let employee;
        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
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

