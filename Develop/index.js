const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require("fs");
let html = `<!DOCTYPE>`;

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
        //   engineer();
        //   break;

        // case "All done adding":
        //   createHTML();
        //   break;
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
        const manager = new Manager();
        const managerinput = `<div>${manager.name}</div>`;
        html += managerinput;
        makeEmployee();
      });
  }
}

const endhtml = `</div></body></html>`;
//
makeEmployee();
