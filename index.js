const inquirer = require("inquirer")
const jest = require("jest")
const fs = require("fs")
const Employee = require("./lib/employee.js")
const Manager = require("./lib/manager.js")
const Engineer = require("./lib/engineer.js")
const Intern = require("./lib/intern.js")

const generateManager = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "Enter manager name:",

        },
        {
            type: "input",
            name: "ID",
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
}