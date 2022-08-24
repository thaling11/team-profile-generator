const inquirer = require("inquirer");
const generateManager = require("./lib/manager");
const generateEngineer = require("./lib/engineer");
const generateIntern = require("./lib/intern");
const fs = require("fs");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",
        }
    ])