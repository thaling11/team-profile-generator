const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require("fs");
// let html = "";
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
          message: "What is the manager's name?",
          name: "name",
        },
        {
          type: "input",
          message: "What is the manager's ID?",
          name: "id",
        },
        {
          type: "input",
          message: "What is the manager's email?",
          name: "email",
        },
        {
          type: "input",
          message: "What is the manager's office number?",
          name: "officeNumber",
        }
      ])
      .then((data) => {
        const name = data.name;
        const id = data.id;
        const email = data.email;
        const officeNumber = data.officeNumber;
        const newManager = new Manager(name, id, email, officeNumber);
        teamMembers.push(newManager);
        makeEmployee();
      });
  }
}

function createHTML() {
  let html = '';
  const startHTML = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport"content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"><title>Team Member Profiles</title></head><body><h1>Team Member Profiles</h1>`;

  html += startHTML

  for (let index = 0; index < teamMembers.length; index++) {
    let teamCard = `<div class="card text-white bg-info mb-3" style="max-width: 18rem;"><div class="card-header">${teamMembers[index].title}</div><div class="card-body"><h5 class="card-title">${teamMembers[index].name}</h5><h2 class="id">${teamMembers[index].id}</h2><h2 class="email">${teamMembers[index].email}</h2>`

     if(teamMembers[index].officeNumber) {
      teamCard += `<h2>${teamMembers[index].officeNumber}</h2>`
    } 

    teamCard += `</div></div>`

    html += teamCard
  }
  const endHTML = `</div></body></html>`

  html += endHTML;
  console.log(htmlAry);
  fs.writeFile('./dist/index.html', JSON.stringify(html), (err) => {
    err ? console.error(err) : console.log("Success!");
  });
};

makeEmployee();
