const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require("fs");
let teamProfiles = [];
let html = "";
let teamMembers = [];

function makeEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What type of team member are you adding?",
        name: "employeeType",
        choices: ["Manager", "Engineer", "Intern", "All done adding"],
      },
    ])
    .then((data) => {
      switch (data.employeeType) {
        case "Manager":
          manager();
          break;

        // case "Engineer":
        //   engineer();
        //   break;

        // case "Intern":
        //   intern();
        //   break;

        case "All done adding":
          createHTML();
          break;
      }
    });

  //manager
  function manager() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the employee's name?",
          name: "name",
        },
        {
          type: "input",
          message: "What is the employee's ID?",
          name: "id",
        },
        {
          type: "input",
          message: "What is the employee's email?",
          name: "email",
        },
      ])
      .then((data) => {
        const name = data.name;
        const id = data.id;
        const email = data.email;
        const manager = new Manager(name, id, email);
        teamMembers.push(manager)
        makeEmployee();
      });
  }
}

function createHTML() {
  const htmlAry = [];
  const startHTML = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
      <title>Team Member Profiles</title>
  </head>
  <body>
  <h1>Team Member Profiles</h1>
 
  `
  htmlAry.push(startHTML);
  
  fs.writeFile("./dist/index.html", html, (err) => {
    err ? console.error(err) : console.log("Success!");
  });
};

let endHTML = `</div></body></html>`;
//
makeEmployee();
