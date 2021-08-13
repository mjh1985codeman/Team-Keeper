const inquirer = require("inquirer");
const fs = require("fs");
const generateSite = require("./src/page-template.js");
const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
// establishing an empty team array at the begging.
//should this be let?
const teamArray = [];

const managerQuestions = () => {
  return (
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the Team Manager's name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the Team Manager's Id?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the Team Manager's Email Address?",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is the Team Manager's office phone number?",
        },
      ])
      //Taking the answers and sotring them as a newManager object
      .then((answers) => {
        const newManager = new Manager(
          //answers.keyname
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber
        );
        console.log(newManager);
        //pushing the newManager Object into the teamArray.
        //I NEED TO TEST THIS TO SEE IF IT'S ACTUALLY WORKING.
        teamArray.push(newManager);
        // console.log("updated team Array" + teamArray);
      })
      //After these questions are done prompt for the addEmployee function.
      .then(addEmployee)
  );
};

const addEmployee = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the Employee's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the employee's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is this employee's email address?",
    },
    {
      type: "list",
      name: "role",
      choices: ["Engineer", "Intern"],
    },
    //while role is Engineer as this question:
    {
      message: "Enter engineer's GitHub username:",
      name: "gitHub",
      when: ({ role }) => role === "Engineer",
    },
    //while role is Intern ask this question:
    {
      message: "Where is the Intern Attending School?",
      name: "school",
      when: ({ role }) => role === "Intern",
    },
  ]);
};

managerQuestions();
