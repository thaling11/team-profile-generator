const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require("fs");
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

        case "Engineer":
          engineer();
          break;

        case "Intern":
          intern();
          break;

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
        },
      ])
      .then((data) => {
        const name = data.name;
        const id = data.id;
        const email = data.email;
        const officeNumber = data.officeNumber;
        const role = data.role;
        const newManager = new Manager(name, id, email, officeNumber);
        teamMembers.push(newManager);
        makeEmployee();
      });
  }
  function engineer() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the engineer's name?",
          name: "name",
        },
        {
          type: "input",
          message: "What is the engineer's ID?",
          name: "id",
        },
        {
          type: "input",
          message: "What is the engineer's email?",
          name: "email",
        },
        {
          type: "input",
          message: "What is the engineer's Github username?",
          name: "github",
        },
      ])
      .then((data) => {
        const name = data.name;
        const id = data.id;
        const email = data.email;
        const github = data.github;
        const newEngineer = new Engineer(name, id, email, github);
        teamMembers.push(newEngineer);
        makeEmployee();
      });
  }
  function intern() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the intern's name?",
          name: "name",
        },
        {
          type: "input",
          message: "What is the intern's ID?",
          name: "id",
        },
        {
          type: "input",
          message: "What is the intern's email?",
          name: "email",
        },
        {
          type: "input",
          message: "What is the intern's school?",
          name: "school",
        },
      ])
      .then((data) => {
        const name = data.name;
        const id = data.id;
        const email = data.email;
        const school = data.school;
        const newIntern = new Intern(name, id, email, school);
        teamMembers.push(newIntern);
        makeEmployee();
      });
  }
}

function createHTML() {
  let html = [];
  const startHTML = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport"content="width=device-width, initial-scale=1.0">
      <title>Team Member Profiles</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Sarabun&display=swap" rel="stylesheet">  
      <style>
        body {
          background-color:	#C7DDCC; 
          color: #16123F;
          font-family: 'Sarabun', sans-serif;
        } 
        .container {
          display: inline-flex;
          justify-content: space-evenly;
          flex-wrap: wrap;
        } 
        .card {
          background-color: #16123F; 
          margin: 50px 20px 20px 20px;
          color: white; 
          padding: 10px;
          width: 200px;
          border: 5px solid #40E0D0;
        } 
        h1 {
          text-align: center;
          background-color: rgb(236, 236, 170);
          padding: 10px;
          margin: 0;
        }
        .card-header {
          background-color: #ABD699;
          color: #16123F;
          margin: -10px;
          padding: 25px;
          font-weight: 700;
          font-size: 25px;
        }
        h3 {
          font-weight: 300;
        }
        a {
          color: #40E0D0;
        }
      </style>
    </head>
  <body>
    <h1>Team Member Profiles</h1>`;

  html += startHTML;

  for (let index = 0; index < teamMembers.length; index++) {
    let teamCard = `<div class="container"><div class="card"><div class="card-header">${teamMembers[index].role}</div><div class="card-body"><h2 class="card-title">${teamMembers[index].name}</h2><h3 class="id">ID: ${teamMembers[index].id}</h3><h3>Email: <a href="mailto:${teamMembers[index].email}">${teamMembers[index].email}</a></h3>`;

    if (teamMembers[index].officeNumber) {
      teamCard += `<h3>Phone: ${teamMembers[index].officeNumber}</h3>`;
    }
    if (teamMembers[index].github) {
      teamCard += `<h3>Github: <a href="https://github.com/${teamMembers[index].github}" target="_blank">${teamMembers[index].github}</a></h3>`;
    }
    if (teamMembers[index].school) {
      teamCard += `<h3>School: ${teamMembers[index].school}</h3>`;
    }

    teamCard += `</div></div></div>`;

    html += teamCard;
  }
  const endHTML = `</div></body></html>`;

  html += endHTML;
  
  //JSON.stringify
  fs.writeFile("./dist/index.html", (html), (err) => {
    err ? console.error(err) : console.log("Success!");
  });
}

makeEmployee();
