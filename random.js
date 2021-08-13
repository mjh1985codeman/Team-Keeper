const inquirer = require("inquirer");

var employees = [];

//Questions array for all employees
const employeeQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the employee?",
  },
  {
    type: "input",
    name: "id",
    message: "What is their employee ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is their email address?",
  },
];

//Questions array for manager
const managerQuestions = [
  {
    type: "input",
    name: "phonenumber",
    message: "What is the manager's office phone number?",
  },
];

// Questions array for engineer
const engineerQuestions = [
  {
    type: "input",
    name: "github",
    message: "What is the engineer's GitHub username?",
  },
];

// Questions array for intern
const internQuestions = [
  {
    type: "input",
    name: "school",
    message: "What school did the intern go to?",
  },
];

// Question to add an additional employee
const nextEmployee = [
  {
    type: "list",
    message: "Would you like to add an Engineer or an Intern to your team?",
    name: "employeetype",
    choices: ["Engineer", "Intern", "None"],
  },
];

// Function to initialize app
function init() {
  //Gets responses for manager and pushes answers from manager object into employees array
  inquirer.prompt(employeeQuestions).then((managerEmployeeresponses) => {
    inquirer.prompt(managerQuestions).then((managerResponses) => {
      var manager = new Manager(
        managerResponses.phonenumber,
        managerEmployeeresponses.name,
        managerEmployeeresponses.id,
        managerEmployeeresponses.email
      );
      employees.push(manager);
      addEmployee();
    });
  });
}

function addEmployee() {
  // Ask manager if there is another employee on the team.  If "None" is selected, no more questions appear and the cards are generated for employees in the employees array
  inquirer.prompt(nextEmployee).then((nextEmployeeResponses) => {
    if (nextEmployeeResponses.employeetype == "None") {
      //Loop to go through employees array and push a card for each employee to the cards array
      for (let index = 0; index < employees.length; index++) {
        var thisemployee = employees[index];
        if (thisemployee.getRole() == "Engineer") {
          cards.push(team.generateEngineerHTML(thisemployee));
        }
        if (thisemployee.getRole() == "Manager") {
          cards.push(team.generateManagerHTML(thisemployee));
        }
        if (thisemployee.getRole() == "Intern") {
          cards.push(team.generateInternHTML(thisemployee));
        }
      }

      // Passing the responses from the user into the HTML file based on employees that manager entered
      const filename = "./dist/my-team.html";
      console.log(team.generateHTML(cards));
      fs.writeFile(filename, team.generateHTML(cards), (err) =>
        err ? console.log(err) : console.log("Success!")
      );
    }
    // Asks the manager to answer the engineer questions and based on those answers, a new engineer is put into the employees array
    else if (nextEmployeeResponses.employeetype == "Engineer") {
      inquirer.prompt(employeeQuestions).then((engineerEmployeeResponses) => {
        inquirer.prompt(engineerQuestions).then((engineerResponses) => {
          var engineer = new Engineer(
            engineerResponses.github,
            engineerEmployeeResponses.name,
            engineerEmployeeResponses.id,
            engineerEmployeeResponses.email
          );
          employees.push(engineer);
          addEmployee();
        });
      });
      // Asks the manager to answer the intern questions and based on those answers, a new intern is put into the employees array
    } else if (nextEmployeeResponses.employeetype == "Intern") {
      inquirer.prompt(employeeQuestions).then((internEmployeeResponses) => {
        inquirer.prompt(internQuestions).then((internResponses) => {
          var intern = new Intern(
            internResponses.school,
            internEmployeeResponses.name,
            internEmployeeResponses.id,
            internEmployeeResponses.email
          );
          employees.push(intern);
          addEmployee();
        });
      });
    }
  });
}

init();
