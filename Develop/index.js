const inquirer = require("inquirer");
const generateManager = require("./lib/manager");
const fs = require("fs");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",
        }
    ])